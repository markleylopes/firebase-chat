import styles from "styles/Home.module.css";
import NLink from "next/link";
import { Logo } from "components/Logo";
import { useLogin } from "./useLogin";
import { Grid, Button, TextField, CircularProgress } from "@mui/material";

export const Login = () => {
  const { user, loading, onSubmit, handleChange } = useLogin();

  return (
    <Grid
      item
      xs={12}
      container
      component="form"
      className={styles.Form}
      onSubmit={onSubmit}
    >
      <Logo />
      <Grid item xs={12}>
        <TextField
          inputProps={{
            required: true,
            minLength: 4,
            maxLength: 100,
            type: "email",
            title: "Digite um email válido",
          }}
          value={user.email}
          name="email"
          onChange={handleChange}
          label="email"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          inputProps={{
            required: true,
            minLength: 6,
            maxLength: 100,
            type: "password",
          }}
          fullWidth
          label="Senha"
          name="password"
          variant="outlined"
          value={user.password}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button disabled={loading} type="submit" variant="contained" fullWidth>
          {loading ? (
            <CircularProgress sx={{ color: "white" }} size={20} />
          ) : (
            "Entrar"
          )}
        </Button>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <NLink href="/criar-conta" passHref>
          <span>
            Novo por aqui? <a className={styles.Link}>Criar uma conta</a>
          </span>
        </NLink>
      </Grid>
    </Grid>
  );
};
