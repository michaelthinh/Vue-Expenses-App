export default {
    setCategory(context, payload) {
        context.commit("setCategory", payload);
    },
    addExpense(context, payload) {
        context.commit("addExpense", payload);
    },
};
