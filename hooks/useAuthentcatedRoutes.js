import { auth } from "services/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useMemo, useState } from "react";

const loggedOutRoutes = ["/", "/criar-conta"];

export const useAuthentication = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const memmoredUser = useMemo(() => user, [user]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (memmoredUser && !loading) {
      setLoaded(true);
      if (loggedOutRoutes.includes(router?.pathname)) {
        router.replace("/escolher-chat");
      }
    } else if (
      !memmoredUser &&
      !loading &&
      !loggedOutRoutes.includes(router?.pathname)
    ) {
      router.replace("/");
    }
  }, [loading, memmoredUser, router]);

  return {
    loaded,
  };
};
