import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";

import {useStyles} from './styles';

const Details = ({title}) => {
    const {total, chatData} = useTransactions(title)
    const classes = useStyles();
  return (
    <Card className={title=== 'Income' ? classes.income: classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chatData}/>
      </CardContent>
    </Card>
  );
};

export default Details;