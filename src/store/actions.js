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
    editExpense(context, payload) {
        context.commit("editExpense", payload);
    },
    initHistories(context) {
        const histories = JSON.parse(localStorage.getItem("histories")) || [];
        context.commit("setHistories", histories);
    },
};
