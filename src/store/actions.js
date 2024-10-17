export default {
    setCategory(context, payload) {
        context.commit("setCategory", payload);
    },
    addExpense(context, payload) {
        context.commit("addExpense", payload);
    },
    deleteExpense(context, payload) {
        context.commit("deleteExpense", payload);
    },
};
