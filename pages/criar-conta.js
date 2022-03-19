import { Main } from "layouts/Main";
import { SignUp } from "components/SignUp";
import { useAuthentication } from "hooks/useAuthentcatedRoutes";

export default function Home() {
  useAuthentication();

  return (
    <Main>
      <SignUp />
    </Main>
  );
}
