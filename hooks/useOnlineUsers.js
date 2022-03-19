import { db } from "services/firebase";
import { useMemo } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";

export const useOnlineUsers = () => {
  const [values = []] = useCollection(
    query(collection(db, "status"), where("status", "==", "online"))
  );

  const onlineUsers = useMemo(
    () => values?.docs?.map((doc) =>  doc.id),
    [values]
  );

  return {
    onlineUsers,
  };
};
