<template>
    <div class="px-6 h-[calc(100%-50px)] overflow-y-auto">
        <!-- Title -->
        <div class="mb-6 font-semibold">
            <div class="flex items-center gap-3">
                <div class="cursor-pointer">
                    <router-link to="/"><ArrowLeft /></router-link>
                </div>
                <span>Set Goal</span>
            </div>
        </div>

        <form @submit.prevent="handleSubmit">
            <!-- Category -->
            <div class="mb-8">
                <router-link to="/set-goal/choose-category">
                    <div
                        :class="[
                            'relative w-full border rounded-lg h-[50px] py-2 px-4 cursor-pointer',
                            categoryError ? 'border-red-500' : 'border-primary',
                        ]"
                    >
                        <label
                            class="absolute left-[16px] top-[-14px] px-1 bg-white text-sm font-semibold"
                            >Category</label
                        >
                        <div class="w-full h-full flex items-center">
                            <CircleHelp color="#6EC2A8" />
                            <div
                                class="ml-4 w-full flex justify-between items-center"
                            >
                                <span
                                    class="text-sm text-textSubtle font-medium"
                                    >{{
                                        category === ""
                                            ? "Select Category"
                                            : uppercaseAll(category)
                                    }}</span
                                >
                                <ChevronRight color="#6EC2A8" />
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>

            <!-- Name -->
            <div class="mb-8">
                <div
                    :class="[
                        'relative w-full border rounded-lg h-[50px] py-2 px-4',
                        nameError ? 'border-red-500' : 'border-primary',
                    ]"
                    @focusout="validateField('name')"
                >
                    <label
                        for="name"
                        class="absolute left-[16px] top-[-14px] px-1 bg-white text-sm font-semibold"
                        >Name</label
                    >
                    <input
                        type="text"
                        name="name"
                        id="name"
                        class="w-full h-full outline-none"
                        placeholder="Expense Name"
                        v-model="name"
                    />
                </div>
            </div>

            <!-- Budget -->
            <div class="mb-8">
                <div
                    :class="[
                        'relative w-full border rounded-lg h-[50px] py-2 px-4',
                        budgetError ? 'border-red-500' : 'border-primary',
                    ]"
                    @focusout="validateField('budget')"
                >
                    <label
                        for="budget"
                        class="absolute left-[16px] top-[-14px] px-1 bg-white text-sm font-semibold"
                        >Budget</label
                    >
                    <input
                        type="number"
                        name="budget"
                        id="budget"
                        class="w-full h-full outline-none"
                        placeholder="Amount"
                        v-model="budget"
                    />
                </div>
            </div>

            <!-- Type -->
            <div class="mb-8">
                <div
                    class="relative w-full border rounded-lg h-[50px] py-2 px-4 border-primary"
                >
                    <label
                        for="moneyType"
                        class="absolute left-[16px] top-[-14px] px-1 bg-white text-sm font-semibold"
                        >Type</label
                    >
                    <select
                        name="moneyType"
                        id="moneyType"
                        class="mt-1 w-full border-none outline-none appearance-none"
                        v-model="type"
                    >
                        <option value="income">Income</option>
                        <option value="outcome">Outcome</option>
                    </select>
                </div>
            </div>

            <!-- Date -->
            <div class="mb-8">
                <div
                    :class="[
                        'relative w-full border rounded-lg h-[50px] py-2 px-4',
                        dateError ? 'border-red-500' : 'border-primary',
                    ]"
                    @focusout="validateField('date')"
                >
                    <label
                        for="date"
                        class="absolute left-[16px] top-[-14px] px-1 bg-white text-sm font-semibold"
                        >Date</label
                    >
                    <input
                        type="date"
                        name="date"
                        id="date"
                        class="w-full h-full outline-none"
                        v-model="date"
                    />
                </div>
            </div>

            <div class="mb-8">
                <button
                    class="relative w-full border rounded-lg h-[50px] py-2 px-4 bg-primary text-sm text-white font-semibold"
                >
                    Set Goal
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ArrowLeft, CircleHelp, ChevronRight } from "lucide-vue-next";
import { v4 as uuidv4 } from "uuid";

export default {
    components: { ArrowLeft, CircleHelp, ChevronRight },
    data() {
        return {
            category: "",
            name: "",
            budget: "",
            type: "income",
            date: null,
            // Errors for validation
            categoryError: false,
            nameError: false,
            budgetError: false,
            dateError: false,
        };
    },
    methods: {
        handleSubmit() {
            // Validate all fields before submission
            if (!this.validateAll()) return;

            const newExpense = {
                id: uuidv4(),
                category: this.category,
                name: this.name,
                budget: this.budget,
                type: this.type,
                date: this.date,
            };
            console.log(newExpense);
            this.$store.dispatch("addExpense", { newExpense });
            this.$router.push("/");
        },
        uppercaseAll(string) {
            return string.toUpperCase();
        },
        validateField(field) {
            // Validate individual fields
            if (
                this[field] === "" ||
                this[field] === null ||
                this[field] === 0
            ) {
                this[`${field}Error`] = true;
            } else {
                this[`${field}Error`] = false;
            }
        },
        validateAll() {
            this.validateField("category");
            this.validateField("name");
            this.validateField("budget");
            this.validateField("date");

            // Check if all fields are valid
            return (
                !this.categoryError &&
                !this.nameError &&
                !this.budgetError &&
                !this.dateError
            );
        },
    },
    computed: {
        ...mapGetters(["chosenCategory"]),
    },
    mounted() {
        this.category = this.$store.getters.chosenCategory;
    },
};
</script>

<style scoped>
.border-red-500 {
    border-color: red;
}
.border-primary {
    border-color: #6ec2a8;
}
</style>
