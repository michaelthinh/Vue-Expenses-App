export default {
    setCategory(state, payload) {
        state.chosenCategory = payload.value;
    },
    addExpense(state, payload) {
        state.histories.push(payload.newExpense);
        localStorage.setItem("histories", JSON.stringify(state.histories));
    },
    deleteExpense(state, payload) {
        state.histories = state.histories.filter(
            (history) => history.id !== payload.id
        );
        localStorage.setItem("histories", JSON.stringify(state.histories));
    },
    editExpense(state, payload) {
        const index = state.histories.findIndex(
            (history) => history.id === payload.newExpense.id
        );
        if (index !== -1) {
            state.histories.splice(index, 1, payload.newExpense);
            localStorage.setItem("histories", JSON.stringify(state.histories));
        }
    },
    setHistories(state, histories) {
        state.histories = histories;
        localStorage.setItem("histories", JSON.stringify(histories));
    },
};
