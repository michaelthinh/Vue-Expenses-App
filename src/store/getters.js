export default {
    chosenCategory(state) {
        return state.chosenCategory;
    },
    histories(state) {
        return state.histories;
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
};
