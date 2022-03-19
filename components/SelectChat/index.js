import styles from "styles/Home.module.css";
import {
  Grid,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useSelectChat } from "./useSelectChat";

export const SelectChat = () => {
  const { chatSession, loading, onSubmit, handleChange } = useSelectChat();
  return (
    <Grid
      item
      xs={12}
      container
      component="form"
      onSubmit={onSubmit}
      className={styles.Form}
    >
      <Grid item xs={12}>
        <Typography variant="body1">
          Escolha o chat que deseja entrar
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          inputProps={{
            autoComplete: "off",
            required: true,
            minLength: 4,
            maxLength: 32,
            pattern: "[^' ']+",
            title: "Não insira espaços",
          }}
          value={chatSession}
          name="chatSession"
          onChange={handleChange}
          label="Id do chat"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button disabled={loading} type="submit" variant="contained" fullWidth>
          {loading ? (
            <CircularProgress sx={{ color: "white" }} size={20} />
          ) : (
            "Ir para chat"
          )}
        </Button>
      </Grid>
    </Grid>
  );
};
