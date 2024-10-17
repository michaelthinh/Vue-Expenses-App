<template>
    <div className="px-6 overflow-y-auto">
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
                className="px-3 py-1 bg-primaryButton text-sm rounded-md font-medium text-white"
            >
                Spendings
            </button>
            <button
                className="px-3 py-1 bg-secondaryButton text-sm rounded-md font-medium text-black"
            >
                Income
            </button>
        </div>
        <!-- Total Spending/ Income -->
        <div className="w-full mt-3 text-center font-semibold text-textSubtle">
            <span>Total Spending</span>
        </div>
        <div className="mt-4 text-center text-3xl font-regular">$607.00</div>
        <!-- Chart -->
        <!-- Transaction History -->
        <history></history>
    </div>
</template>

<script>
import History from "../components/history/History.vue";
export default {
    components: { History },
};
</script>

<style></style>
