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
                <router-link to="/set-goal/choose-category">
                    <div
                        className="relative w-full border rounded-lg h-[50px] py-2 px-4 border-primary cursor-pointer"
                    >
                        <label
                            for=""
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
                                        category === ""
                                            ? "Select Category"
                                            : category
                                    }}</span
                                >
                                <ChevronRight color="#6EC2A8" />
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div className="mb-8">
                <div
                    className="relative w-full border rounded-lg h-[50px] py-2 px-4 border-primary"
                >
                    <label
                        for=""
                        className="absolute left-[16px] top-[-14px] px-1 bg-white text-sm text-primary font-semibold"
                        >Budget</label
                    >
                    <input
                        type="number"
                        name="category"
                        id="category"
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
                        for=""
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
                        for=""
                        className="absolute left-[16px] top-[-14px] px-1 bg-white text-sm text-primary font-semibold"
                        >Date</label
                    >
                    <input
                        type="date"
                        name="category"
                        id="category"
                        className="w-full h-full outline-transparent focus:ouline-transparent focus:border-none"
                        v-model="date"
                    />
                </div>
            </div>
            <div className="mb-8">
                <button
                    className="relative w-full border rounded-lg h-[50px] py-2 px-4 bg-primary text-sm text-white font-semibold"
                >
                    Set Goal
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

import { v4 as uuidv4 } from "uuid";

export default {
    components: { ArrowLeft, CircleHelp, ChevronRight },
    data() {
        return {
            category: "",
            budget: "",
            type: "income",
            date: null,
        };
    },
    methods: {
        handleSubmit() {
            const newExpense = {
                id: uuidv4(),
                category: this.category,
                budget: this.budget,
                type: this.type,
                date: this.date,
            };
            console.log(newExpense);
            this.$store.dispatch("addExpense", { newExpense: newExpense });
            this.$router.push("/");
        },
    },
    computed: {
        ...mapGetters(["chosenCategory"]),
    },
    mounted() {
        this.category = this.$store.getters.chosenCategory;
        console.log(this.category);
    },
};
</script>

<style></style>
