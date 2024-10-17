export default {
    setCategory(state, payload) {
        state.chosenCategory = payload.value;
    },
    addExpense(state, payload) {
        state.histories.push(payload.newExpense);
    },
    deleteExpense(state, payload) {
        state.histories = state.histories.filter(
            (history) => history.id !== payload.id
        );
    },
};
