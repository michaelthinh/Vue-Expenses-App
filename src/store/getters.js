export default {
    chosenCategory(state) {
        return state.chosenCategory;
    },
    histories(state) {
        return state.histories;
    },
    spendingHistory(state) {
        const renderedHistory = state.histories.filter(
            (history) => history.type === "outcome"
        );
        return renderedHistory;
    },
    incomeHistory(state) {
        const renderedHistory = state.histories.filter(
            (history) => history.type === "income"
        );
        return renderedHistory;
    },
    spendings(state) {
        let spendings = 0;
        state.histories.forEach((item) => {
            if (item.type === "outcome") {
                spendings += item.budget;
            }
        });
        return spendings;
    },
    incomes(state) {
        let incomes = 0;
        state.histories.forEach((item) => {
            if (item.type === "income") {
                incomes += item.budget;
            }
        });
        return incomes;
    },
    expenseInfo: (state) => (id) => {
        return state.histories.find((item) => item.id === id);
    },
};
