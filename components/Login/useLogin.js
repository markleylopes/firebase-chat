import { auth } from "services/firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import { useErrors } from "hooks/useErrors";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ email: "", passwprd: "" });
  const { openSnackbarError } = useErrors();

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUser((currentValue) => ({ ...currentValue, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        router.push("/escolher-chat");
      })
      .catch((error) => openSnackbarError(error))
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    user,
    loading,
    onSubmit,
    handleChange,
  };
};
