import { auth } from "services/firebase";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useRouter } from "next/router";

export const useSelectChat = () => {
  const router = useRouter();
  const [user] = useState(auth.currentUser);
  const [loading, setLoading] = useState(false);
  const [chatSession, setChatSession] = useState(`${nanoid()}`);

  const handleChange = ({ target }) => setChatSession(target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    router.push(`/chat/${chatSession}`);
    setLoading(false);
  };

  return {
    user,
    loading,
    onSubmit,
    chatSession,
    handleChange,
  };
};
