import {
  Card,
  Typography,
  CardHeader,
  Grid,
  Divider,
  CardContent,
} from "@material-ui/core";
import React from 'react'
import Form from "./form/Form";
import List from "./list/List";
import {useStyles} from './styles'
import {useGlobalContext} from '../../context/context'
import InfoCard from '../InfoCard'

const Main = () => {
    const { balance }= useGlobalContext();
    const classes = useStyles()
    return (
      <Card>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
        <CardContent>
          <Typography align="center" variant="h5">
            Total Balance ${balance}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ lineHeight: "1.5em", marginTop: "20px" }}
          >
            <InfoCard/>
          </Typography>
          <Divider className={classes.divider}/>
          <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
}

export default Main
