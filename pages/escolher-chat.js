import { Main } from "layouts/Main";
import { ExitBar } from "components/ExitBar";
import { SelectChat } from "components/SelectChat";
import { useAuthentication } from "hooks/useAuthentcatedRoutes";

const ChatPage = () => {
  const { loaded } = useAuthentication();

  return (
    <Main horizontalSpaces={false}>
      {loaded && (
        <>
          <ExitBar showBackButton={false} />
          <SelectChat />
        </>
      )}
    </Main>
  );
};

export default ChatPage;
