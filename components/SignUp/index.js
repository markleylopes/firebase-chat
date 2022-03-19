import styles from "styles/Home.module.css";
import NLink from "next/link";
import { useSignUp } from "./useSignUp";
import { SelectImage } from "components/SelectImage";
import { Grid, Button, TextField, CircularProgress } from "@mui/material";

export const SignUp = () => {
  const { user, loading, onSubmit, handleChange, setFile } = useSignUp();

  return (
    <Grid
      item
      xs={12}
      container
      component="form"
      className={styles.Form}
      onSubmit={onSubmit}
    >
      <Grid item xs={12} display="flex" justifyContent="center">
        <SelectImage file={user?.avatar?.original} setFile={setFile} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          inputProps={{
            autoComplete: "off",
            required: true,
            minLength: 4,
            maxLength: 32,
          }}
          value={user.name}
          name="name"
          onChange={handleChange}
          label="Nome"
          variant="outlined"
          fullWidth
        />
      </Grid>
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
          value={user.password}
          name="password"
          onChange={handleChange}
          label="Senha"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button disabled={loading} type="submit" variant="contained" fullWidth>
          {loading ? (
            <CircularProgress sx={{ color: "white" }} size={20} />
          ) : (
            "Criar Conta"
          )}
        </Button>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <NLink href="/" passHref>
          <span>
            Já tem conta? <a className={styles.Link}>Fazer login</a>
          </span>
        </NLink>
      </Grid>
    </Grid>
  );
};
