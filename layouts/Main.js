import styles from "styles/Main.module.css";
import { Box, Grid } from "@mui/material";

export const Main = ({ children, horizontalSpaces = true }) => (
  <Grid
    container
    height="100vh"
    alignItems="center"
    justifyContent="center"
    className={styles.Main}
  >
    <Box
      item
      container
      component={Grid}
      alignItems="center"
      className={`${styles.Box} ${horizontalSpaces ? styles.BoxSpacing : ""}`}
      justifyContent="center"
    >
      {children}
    </Box>
  </Grid>
);
