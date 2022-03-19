import "react-chat-elements/dist/main.css";
import styles from "styles/Chat.module.css";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import {
  Grid,
  TextField,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { useChatSession } from "./useChatSession";
import { MessageList } from "react-chat-elements";
import { ExitBar } from "components/ExitBar";

export const ChatSession = () => {
  const {
    messages,
    onAddMessage,
    sendingMessage,
    newMessageValue,
    onChangeMessageValue,
  } = useChatSession();

  return (
    <>
      <ExitBar />
      <Grid item container className={styles.ChatContainer}>
        <MessageList
          className={styles["rce-mlist"]}
          lockable={false}
          dataSource={messages}
        />
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  disabled={sendingMessage}
                  onClick={onAddMessage}
                  color="primary"
                >
                  {sendingMessage && <CircularProgress size={20} />}
                  {!sendingMessage && <SendIcon />}
                </IconButton>
              </InputAdornment>
            ),
            className: styles.TextField,
          }}
          rows={2}
          fullWidth
          multiline
          variant="outlined"
          value={newMessageValue}
          disabled={sendingMessage}
          onChange={onChangeMessageValue}
        />
      </Grid>
    </>
  );
};
