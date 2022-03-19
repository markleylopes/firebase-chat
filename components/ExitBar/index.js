import "react-chat-elements/dist/main.css";
import { Box, Chip, Avatar, Button, ButtonGroup } from "@mui/material";
import { useChatSession } from "components/ChatSession/useChatSession";
import styles from "styles/Chat.module.css";
import Logout from "@mui/icons-material/Logout";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

export const ExitBar = ({ loading = false, showBackButton = true }) => {
  const { user, exiting, onExitChat, onBackChat, sendingMessage } =
    useChatSession();

  const userPhotoUrl = user?.photoURL
    ? `${process.env.NEXT_PUBLIC_FIREBASE_BUCKET_URL}${user?.photoURL}?alt=media`
    : "";

  return (
    <Box className={styles.ChatHeader}>
      {(loading || exiting) && "Carregando"}
      {!exiting && (
        <>
          <Chip
            avatar={<Avatar alt="Avatar" src={userPhotoUrl} />}
            label={`Olá ${user?.displayName || ""}`}
          />
          <div>
            <ButtonGroup
              variant="text"
              size="small"
              disabled={sendingMessage || exiting || loading}
            >
              {showBackButton && (
                <Button
                  onClick={onBackChat}
                  startIcon={<MeetingRoomIcon fontSize="small" />}
                >
                  Voltar
                </Button>
              )}
              <Button
                onClick={onExitChat}
                startIcon={<Logout fontSize="small" />}
              >
                Sair
              </Button>
            </ButtonGroup>
          </div>
        </>
      )}
    </Box>
  );
};
