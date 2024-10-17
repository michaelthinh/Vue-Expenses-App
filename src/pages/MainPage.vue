<template>
    <div className="px-6 h-[calc(100%-50px)] overflow-y-auto">
        <!-- Title -->
        <div className="mb-3 font-semibold"><span>My Expenses App</span></div>
        <!-- User Info / Weekly -->
        <div className="flex items-center justify-between">
            <div className="text-sm text-textSubtle flex items-center gap-2">
                <span className="font-bold">**** 2162</span>
                <div
                    className="flex items-center justify-center cursor-pointer"
                >
                    <font-awesome-icon
                        :icon="['fas', 'chevron-down']"
                        className="textSutle cursor-pointer"
                    />
                </div>
            </div>
            <div className="text-sm text-textSubtle flex items-center gap-2">
                <span className="font-semibold">Weekly</span>
                <div
                    className="flex items-center justify-center cursor-pointer"
                >
                    <font-awesome-icon
                        :icon="['fas', 'chevron-down']"
                        className="textSutle cursor-pointer"
                    />
                </div>
            </div>
        </div>
        <!-- CTA Buttons -->
        <div className="mt-6 flex justify-center gap-4">
            <button
                :className="
                    isActive === 'spendings'
                        ? 'px-3 py-1  text-sm rounded-md font-medium text-white bg-primary'
                        : 'px-3 py-1 text-sm rounded-md font-medium text-black bg-secondary'
                "
                @click="toggle('spendings')"
            >
                Spendings
            </button>
            <button
                :className="
                    isActive === 'incomes'
                        ? 'px-3 py-1  text-sm rounded-md font-medium text-white bg-primary'
                        : 'px-3 py-1 text-sm rounded-md font-medium text-black bg-secondary'
                "
                @click="toggle('incomes')"
            >
                Income
            </button>
        </div>
        <!-- Total Spending/ Income -->
        <div className="w-full mt-3 text-center font-semibold text-textSubtle">
            <span
                >Total
                {{ isActive === "spendings" ? "Spendings" : "Incomes" }}</span
            >
        </div>
        <div className="mt-4 text-center text-3xl font-regular">
            ${{ isActive === "spendings" ? spendings : incomes }}.00
        </div>
        <!-- Chart -->
        <!-- Transaction History -->
        <history></history>
    </div>
</template>

<script>
import History from "../components/history/History.vue";
export default {
    components: { History },
    data() {
        return {
            spendings: 0,
            incomes: 0,
            isActive: "spendings",
        };
    },
    computed() {
        return;
    },
    methods: {
        toggle(value) {
            this.isActive = value;
        },
    },
    beforeMount() {
        this.spendings = this.$store.getters.spendings;
        this.incomes = this.$store.getters.incomes;
    },
};
</script>

<style></style>
