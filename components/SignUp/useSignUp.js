import { auth } from "services/firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import { useErrors } from "hooks/useErrors";
import { getStorage, ref, uploadString } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignUp = () => {
  const router = useRouter();
  const { openSnackbarError } = useErrors();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: { original: undefined, cropped: undefined },
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUser((currentValue) => ({ ...currentValue, [name]: value }));
  };

  const setFile = (file) =>
    setUser((currentValue) => ({
      ...currentValue,
      avatar: file,
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      const storage = getStorage();

      const profilePayload = {
        displayName: user.name,
      };

      if (user.avatar.original) {
        const avatarFileUrl = `${
          userCredential.user.uid
        }.${user.avatar.original.name.split(".").pop()}`;

        const storageRef = ref(storage, `/public/${avatarFileUrl}`);

        profilePayload.photoURL = avatarFileUrl;

        await uploadString(storageRef, user.avatar.cropped, "data_url").catch(
          (err) => {
            console.error(err);

            openSnackbarError({ code: "custom/upload-image-error" });
          }
        );
      }

      await updateProfile(userCredential.user, profilePayload);
      router.push(`/escolher-chat`);
    } catch (error) {
      openSnackbarError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    setFile,
    onSubmit,
    handleChange,
  };
};
