import { useMemo, useState } from "react";
import "react-chat-elements/dist/main.css";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useErrors } from "hooks/useErrors";
import { format, register } from "timeago.js";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db, auth, database } from "services/firebase";
import { ref, set, serverTimestamp } from "firebase/database";
import { collection, doc, setDoc, orderBy, query } from "firebase/firestore";
import brLocate from "timeago.js/lib/lang/pt_BR.js";
import { useOnlineUsers } from "hooks/useOnlineUsers";

export const useChatSession = () => {
  register("pt_BR", brLocate);
  const router = useRouter();
  const { onlineUsers } = useOnlineUsers();
  const { openSnackbarError } = useErrors();
  const { chatId } = router.query;
  const user = auth.currentUser;
  const chatDocumentRef = doc(db, "chat", `${chatId}`);
  const [newMessageValue, setNewMessageValue] = useState("");
  const [exiting, setExiting] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [value = [], loading, error] = useCollectionData(
    query(collection(chatDocumentRef, "messages"), orderBy("createdAt", "asc"))
  );

  const messages = useMemo(
    () =>
      value.map((message) => {
        const mappedMessage = {
          type: "text",
          text: message.text,
          date: message.createdAt.toDate(),
          position: message.userId === user?.uid ? "right" : "left",
          title:
            message.userId === user?.uid
              ? "Você"
              : `${message?.userName || "noname"} - ${
                  onlineUsers?.includes(message.userId) ? "online" : "offline"
                }`,
          dateString: format(message.createdAt.toDate(), "pt_BR"),
        };

        if (message.avatar) mappedMessage.avatar = message.avatar;

        return mappedMessage;
      }),
    [value, user, onlineUsers]
  );

  const onAddMessage = async () => {
    if (!newMessageValue.trim()) return;
    if (newMessageValue.length > 300) return;

    try {
      setSendingMessage(true);
      const messagesSubdocumentRef = doc(
        collection(chatDocumentRef, "messages")
      );

      await setDoc(
        messagesSubdocumentRef,
        {
          userId: user?.uid,
          text: newMessageValue,
          userName: user?.displayName,
          avatar: user.photoURL
            ? `${process.env.NEXT_PUBLIC_FIREBASE_BUCKET_URL}${user.photoURL}?alt=media`
            : "",
          createdAt: new Date(),
        },
        { merge: true }
      );
      setNewMessageValue("");
    } catch (error) {
      openSnackbarError(error);
    } finally {
      setSendingMessage(false);
    }
  };

  const onExitChat = async () => {
    try {
      const myConnectionsRef = ref(database, `status/${user.uid}`);

      setExiting(true);
      router.push("/");
      set(myConnectionsRef, {
        status: "offline",
        last_changed: serverTimestamp(),
      });
      await signOut(auth);
    } catch (error) {
      openSnackbarError(error);
    } finally {
      setExiting(false);
    }
  };

  const onBackChat = () => router.push("/escolher-chat");

  const onChangeMessageValue = ({ target }) => setNewMessageValue(target.value);

  return {
    user,
    chatId,
    loading,
    exiting,
    messages,
    onBackChat,
    onExitChat,
    onAddMessage,
    sendingMessage,
    newMessageValue,
    onChangeMessageValue,
  };
};
