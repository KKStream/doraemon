import React, { useEffect, useState } from "react";
import { useForm } from "react-cool-form";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Awaited } from "../../src/lib";
import { connectCast, loadMedia, playOrPause } from "../../src/controller";
import Theme from "./Theme";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiButton-root": {
      margin: theme.spacing(1)
    },
    "& .MuiTextField-root": {
      margin: `${theme.spacing(1)} 0`
    },
    "& .MuiAccordionSummary-content": {
      fontSize: "120%",
      fontWeight: theme.typography.fontWeightBold
    },
    "& .MuiAccordionDetails-root": {
      display: "block"
    }
  }
}));

const tryParse = text => {
  try {
    return JSON.parse(text);
  } catch (e) {}
};

const Controls = ({ socket }) => {
  const { form } = useForm({
    defaultValues: tryParse(localStorage["options"]),
    onSubmit: values => {
      const options = {
        ...values,
        customData: JSON.parse(values.customData)
      };
      loadMedia(socket, options);
      localStorage["options"] = JSON.stringify(values);
    }
  });
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      className={classes.root}
      component="form"
      ref={form}
      noValidate
    >
      <Grid item xs={12}>
        Virtual Cast
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField name="contentId" label="contentId" fullWidth />
        <TextField name="contentUrl" label="contentUrl" fullWidth />
        <TextField
          name="customData"
          label="customData"
          fullWidth
          multiline
          rows={5}
        />
        <Button type="submit" variant="contained" color="secondary">
          Cast Media
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          type="button"
          variant="contained"
          onClick={() => playOrPause(socket)}
        >
          Play / Pause
        </Button>
      </Grid>
    </Grid>
  );
};

type CastSocket = Awaited<ReturnType<typeof connectCast>>;

const App = () => {
  const [socket, setSocket] = useState<CastSocket>();
  useEffect(() => {
    connectCast().then(setSocket);
  }, []);

  return (
    <Theme>
      <Container>
        {socket ? <Controls socket={socket} /> : "connecting"}
      </Container>
    </Theme>
  );
};

export default App;
