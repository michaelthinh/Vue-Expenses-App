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
        <history-item
            v-for="history in data"
            :key="history.id"
            :history="history"
        ></history-item>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import HistoryItem from "./HistoryItem.vue";
export default {
    props: ["data"],
    components: { "history-item": HistoryItem },

    computed: {
        ...mapGetters(["histories"]),
    },
    mounted() {},
};
</script>

<style></style>
