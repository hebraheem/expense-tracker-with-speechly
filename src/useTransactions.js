import {useGlobalContext} from './context/context';
import {incomeCategories, expenseCategories, resetCategories} from './datas/catagories';

const useTransactions = (title)=>{
    resetCategories();
    const { transactions } = useGlobalContext();
    // to get the exact category to add to
    const selectedCategories = transactions.filter(trans => trans.type === title); // title will be pass from function

}