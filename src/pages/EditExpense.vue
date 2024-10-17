<template>
    <div className="px-6 h-[calc(100%-50px)] overflow-y-auto">
        <!-- Title -->
        <div className="mb-6 font-semibold">
            <div className="flex items-center gap-3">
                <div className="cursor-pointer">
                    <router-link to="/"><ArrowLeft /></router-link>
                </div>
                <span>Set Goal</span>
            </div>
        </div>
        <form @submit.prevent="handleSubmit">
            <div className="mb-8">
                <div
                    className="relative w-full border rounded-lg h-[50px] py-2 px-4 border-primary cursor-default"
                >
                    <label
                        for="category"
                        className="absolute left-[16px] top-[-14px] px-1 bg-white text-sm text-primary font-semibold"
                        >Category</label
                    >
                    <div className="w-full h-full flex items-center">
                        <CircleHelp color="#6EC2A8" />
                        <div
                            className="ml-4 w-full flex justify-between items-center"
                        >
                            <span
                                className="text-sm text-textSubtle font-medium"
                                >{{
                                    info.category === ""
                                        ? "Select Category"
                                        : uppercaseAll(info.category)
                                }}</span
                            >
                            <ChevronRight color="#6EC2A8" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-8">
                <div
                    className="relative w-full border rounded-lg h-[50px] py-2 px-4 border-primary"
                >
                    <label
                        for="name"
                        className="absolute left-[16px] top-[-14px] px-1 bg-white text-sm text-primary font-semibold"
                        >Name</label
                    >
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full h-full outline-transparent focus:ouline-transparent focus:border-none"
                        placeholder="Name"
                        v-model="name"
                    />
                </div>
            </div>
            <div className="mb-8">
                <div
                    className="relative w-full border rounded-lg h-[50px] py-2 px-4 border-primary"
                >
                    <label
                        for="budget"
                        className="absolute left-[16px] top-[-14px] px-1 bg-white text-sm text-primary font-semibold"
                        >Budget</label
                    >
                    <input
                        type="number"
                        name="budget"
                        id="budget"
                        className="w-full h-full outline-transparent focus:ouline-transparent focus:border-none"
                        placeholder="Amount"
                        v-model="budget"
                    />
                </div>
            </div>
            <div className="mb-8">
                <div
                    className="relative w-full border rounded-lg h-[50px] py-2 px-4 border-primary"
                >
                    <label
                        for="moneyType"
                        className="absolute left-[16px] top-[-14px] px-1 bg-white text-sm text-primary font-semibold"
                        >Type</label
                    >
                    <select
                        name="moneyType"
                        id="moneyType"
                        className="mt-1 w-full border-none outline-none appearance-none "
                        v-model="type"
                    >
                        <option value="income">Income</option>
                        <option value="outcome">Outcome</option>
                    </select>
                </div>
            </div>
            <div className="mb-8">
                <div
                    className="relative w-full border rounded-lg h-[50px] py-2 px-4 border-primary"
                >
                    <label
                        for="date"
                        className="absolute left-[16px] top-[-14px] px-1 bg-white text-sm text-primary font-semibold"
                        >Date</label
                    >
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="w-full h-full outline-transparent focus:ouline-transparent focus:border-none"
                        v-model="date"
                        ref="dateRef"
                    />
                </div>
            </div>
            <div className="mb-8">
                <button
                    className="relative w-full border rounded-lg h-[50px] py-2 px-4 bg-primary text-sm text-white font-semibold"
                >
                    Edit Expense
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { ArrowLeft } from "lucide-vue-next";
import { CircleHelp } from "lucide-vue-next";
import { ChevronRight } from "lucide-vue-next";
import { mapGetters } from "vuex";

export default {
    components: { ArrowLeft, CircleHelp, ChevronRight },
    data() {
        return {
            category: "",
            budget: 0,
            name: "",
            type: "income",
            date: null,
            info: null,
        };
    },
    methods: {
        handleSubmit() {
            const newExpense = {
                id: this.$route.params.expenseId,
                category: this.category,
                name: this.name,
                budget: this.budget,
                type: this.type,
                date: this.date,
            };
            this.$store.dispatch("editExpense", { newExpense: newExpense });
            this.$router.push("/");
        },
        uppercaseAll(string) {
            return string.toUpperCase();
        },
    },
    computed: {
        ...mapGetters(["chosenCategory"]),
    },
    beforeMount() {
        let expenseInfo = null;
        expenseInfo = this.$store.getters.expenseInfo(
            this.$route.params.expenseId
        );
        this.info = expenseInfo;
        this.category = expenseInfo.category;
        this.budget = expenseInfo.budget;
        this.type = expenseInfo.type;
        this.name = expenseInfo.name;
        this.date = expenseInfo.date;
    },
};
</script>

<style></style>
