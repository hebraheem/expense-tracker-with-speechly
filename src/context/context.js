import React, { useReducer, createContext } from "react";
import reducer from "./reducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducer, initialState);

  //Action Creators
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce((acc, val) => {
    return val.type === "Expense" ? acc - val.amount : acc + val.amount;
  }, 0);

  return (
    <ExpenseTrackerContext.Provider
      value={{ balance, transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(ExpenseTrackerContext);
};
