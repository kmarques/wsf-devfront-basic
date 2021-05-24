import React, { useState } from "react";
import MuiButton from "@material-ui/core/Button";
import MuiDialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiTypography from "@material-ui/core/Typography";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiCloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
const buttons = [
  { variant: "outlined", title: "Hello" },
  { onClick: (event) => console.log("world"), title: "World" },
  { variant: "outlined", title: "I'm" },
  { onClick: (event) => alert("alive"), title: "alive" },
];

const useStyles = makeStyles({
  closeButton: { position: "absolute", top: 5, right: 5 },
});

export default function ButtonsDemo() {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [counter, setCounter] = useState(0);
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column">
        <Grid item container>
          <MuiButton
            variant="contained"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {"theme: " + theme}
          </MuiButton>
          <MuiButton
            variant="contained"
            onClick={() => setCounter(counter + 1)}
          >
            {"counter: " + counter}
          </MuiButton>
        </Grid>
        <Grid item container alignItems="center" justify="space-around">
          {buttons.map(({ title, ...props }) => (
            <MuiButton key={title} {...props}>
              {title}
            </MuiButton>
          ))}
        </Grid>
      </Grid>
      <MuiButton
        variant="contained"
        color="secondary"
        onClick={() => setShow(true)}
      >
        Open modal
      </MuiButton>
      <MuiDialog open={show} onClose={() => setShow(false)}>
        <MuiDialogTitle disableTypography>
          <MuiTypography variant="h6" style={{ marginRight: 55 }}>
            Open modal
          </MuiTypography>
          <MuiIconButton
            aria-label="close"
            onClick={() => setShow(false)}
            className={classes.closeButton}
          >
            <MuiCloseIcon />
          </MuiIconButton>
        </MuiDialogTitle>
        <MuiDialogContent>Test modal</MuiDialogContent>
        <MuiDialogActions>
          <MuiButton onClick={() => alert("test")}>Test</MuiButton>
        </MuiDialogActions>
      </MuiDialog>
    </div>
  );
}
