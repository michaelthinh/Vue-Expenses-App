<template>
    <div className="mt-4">
        <!-- Title -->
        <div className="flex items-center justify-between">
            <span>Transaction History</span>
            <div className="flex items-center gap-2 text-xs text-textSubtle">
                <span className="font-bold">Today</span>
                <font-awesome-icon
                    :icon="['fas', 'chevron-down']"
                    className="textSutle cursor-pointer"
                />
            </div>
        </div>
        <!-- History -->
        <history-item></history-item>
        <history-item></history-item>
        <history-item></history-item>
        <history-item></history-item>
        <history-item></history-item>
        <history-item></history-item>
        <history-item></history-item>
        <history-item></history-item>
    </div>
</template>

<script>
import HistoryItem from "./HistoryItem.vue";
export default {
    components: { "history-item": HistoryItem },
};
</script>

<style></style>
