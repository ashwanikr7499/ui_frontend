import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import history from "../HistoryContainer/History";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Stock" onClick={() => history.push("/stock")} />
        <Tab label="Appointment" onClick={() => history.push("/appointment")} />
        <Tab label="Counter" onClick={() => history.push("/counter")} />
      </Tabs>
    </Paper>
  );
}
