import React, { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useFormStyles } from "./styles";
import { useGlobalContext } from "../../../context/context";
import { v4 as uuidv4 } from "uuid";
import { incomeCategories, expenseCategories } from "../../../datas/catagories";
import FormatDate from '../../../utils/formatDate';
import {useSpeechContext} from '@speechly/react-client'

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: FormatDate(new Date()),
};

const Form = () => {
  const classes = useFormStyles();
  const [formData, setFormData] = useState(initialState);

  const { addTransaction } = useGlobalContext();

  //to get where to loop from
  const selectedCategory =
    formData.type === "Income" ? incomeCategories : expenseCategories;

    const { segment } = useSpeechContext()

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    //reset form
    setFormData(initialState);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" gutterBottom variant="subtitle2">
          { segment ? (<>
              {segment.words.map(word => word.value).join(' ')}
          </>) : null}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategory.map((selected) => (
              <MenuItem key={selected.type} value={selected.type}>
                {selected.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: FormatDate(e.target.value) })
          }
        />
      </Grid>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        className={classes.button}
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
