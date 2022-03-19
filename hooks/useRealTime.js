import {
  ref,
  set,
  onValue,
  onDisconnect,
  serverTimestamp,
} from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database } from "services/firebase";
import { useEffect, useMemo, useRef } from "react";

export const useRealTime = () => {
  const databaseRef = useRef();
  const [user] = useAuthState(auth);
  const memmoredUser = useMemo(() => user, [user]);

  useEffect(() => {
    if (!memmoredUser?.uid) return;

    const myConnectionsRef = ref(database, `status/${memmoredUser.uid}`);
    const connectedRef = ref(database, ".info/connected");

    databaseRef.current = onValue(connectedRef, (snap) => {
      if (snap.val() === true) {
        const con = myConnectionsRef;

        onDisconnect(con).set({
          status: "offline",
          last_changed: serverTimestamp(),
        });

        set(con, { status: "online", last_changed: serverTimestamp() });
      }
    });
  }, [memmoredUser]);

  useEffect(() => {
    return () => {
      if (databaseRef.current) databaseRef.current();
    };
  }, []);
};
