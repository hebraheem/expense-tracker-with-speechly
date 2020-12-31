import {useGlobalContext} from './context/context';
import {incomeCategories, expenseCategories, resetCategories} from './datas/catagories';

const useTransactions = (title)=>{
    resetCategories();
    const { transactions } = useGlobalContext();
    // to get the exact category to add i.e either Income or expense fro transaction
    const allCategories = transactions.filter(trans => trans.type === title); // title will be pass from function
    const total = allCategories.reduce((acc, curVal) => acc += curVal.amount, 0); // sum all amount in a particular cat

    const categories =
      title === "Income" ? incomeCategories : expenseCategories;

    console.log({ allCategories, total, categories });

    //loop through the allCategories to get each category where title = catrgory
    allCategories.forEach(trans =>{
      const specificCategory = categories.find((cat) => cat.type === trans.category);
      // to increase the amount
      if (specificCategory) {
          specificCategory.amount += trans.amount
      }
    })
    //to remove category of amount lessthan or equal to 0
    const filteredCat = categories.filter((cat)=> cat.amount > 0);

    // to put all data inside the chatdata;
    const chatData= {
        datasets: [{
            data: filteredCat.map(c => c.amount),
            backgroundColor: filteredCat.map(c => c.color) 
        }],
        labels: filteredCat.map(c => c.type)
    }
    return {filteredCat, total, chatData}
}

export default useTransactions;