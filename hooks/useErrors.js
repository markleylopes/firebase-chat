import { errors } from "constants/errors";
import { useSnackbar } from "notistack";

export const useErrors = () => {
  const { enqueueSnackbar } = useSnackbar();

  const openSnackbarError = (error) => {
    const errorCode = error?.code;
    const errorMessage = errors?.[errorCode] || "Erro desconhecido";

    console.error(errorCode);
    enqueueSnackbar(errorMessage, {
      variant: "info",
    });
  };

  return { openSnackbarError };
};
