export default {
    setCategory(state, payload) {
        state.chosenCategory = payload.value;
    },
    addExpense(state, payload) {
        state.histories.push(payload.newExpense);
    },
};
