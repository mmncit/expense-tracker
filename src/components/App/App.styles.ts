import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const styles = (theme: Theme) =>
  ({
    root: {
      margin: 0,
    },
    intro: {
      fontSize: "12px",
      color: theme.palette.grey[500],
      paddingRight: theme.spacing(),
      letterSpacing: "0.4px",
    },
  } as const);

export const useStyles = makeStyles()(styles);
