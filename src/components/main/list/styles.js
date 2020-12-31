import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  avatarIncome: {
    color: "#fff",
    backgroundColor: "green",
  },
  avatarExpense: {
    color: theme.palette.getContrastText('#FF0000[500]'),
    backgroundColor: 'red',
  },
  list: {
    maxHeight: "150px",
    overflow: "auto",
  },
}));
