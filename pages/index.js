import { Main } from "layouts/Main";
import { Login } from "components/Login";
import { useAuthentication } from "hooks/useAuthentcatedRoutes";

const LoginPage = () => {
  useAuthentication();

  return (
    <Main>
      <Login />
    </Main>
  );
};

export default LoginPage;
