import { Main } from "layouts/Main";
import { ChatSession } from "components/ChatSession";
import { useAuthentication } from "hooks/useAuthentcatedRoutes";

const ChatPage = () => {
  const { loaded } = useAuthentication();

  return loaded ? (
    <Main horizontalSpaces={false}>
      <ChatSession />
    </Main>
  ) : (
    <></>
  );
};

export default ChatPage;
