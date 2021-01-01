import React from "react";
import { Snackbar as MuiSnackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Snackbar = ({open, setOpen}) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false)
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction created successfully
        </MuiAlert>
      </MuiSnackbar>
    </div>
  );
};

export default Snackbar;
