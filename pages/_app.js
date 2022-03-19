import "styles/globals.css";
import { Button } from "@mui/material";
import { createRef } from "react";
import { useRealTime } from "hooks/useRealTime";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }) {
  const notistackRef = createRef();
  const onClickDismiss = (key) => () => notistackRef.current.closeSnackbar(key);
  
  useRealTime();

  return (
    <SnackbarProvider
      ref={notistackRef}
      action={(key) => (
        <Button
          variant="text"
          disableRipple
          color="inherit"
          onClick={onClickDismiss(key)}
        >
          Fechar
        </Button>
      )}
    >
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}

export default MyApp;
