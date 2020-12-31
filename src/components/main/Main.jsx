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

const Main = () => {
    const classes = useStyles()
    return (
       <Card >
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
           <CardContent>
               <Typography align="center" variant="h5">Total Balance $100</Typography>
               <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop: '20px'}}>
                   {/* <InfoCard/> */}
                   Try saying: Add income for $100 in category Salary for Monday...
               </Typography>
               <Divider/>
               <Form/>
           </CardContent>
           <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                       <List/>
                    </Grid>
                </Grid>
           </CardContent>
       </Card>
    )
}

export default Main
