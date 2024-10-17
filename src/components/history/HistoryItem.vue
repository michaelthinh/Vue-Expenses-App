<template>
    <div
        className="mt-4 mb-2  flex items-center cursor-pointer rounded-xl overflow-hidden"
        @click="handleChoose(history.id)"
    >
        <div
            className="w-[50px] h-[50px] bg-yellow-50 flex justify-center items-center rounded-xl"
        >
            <Dumbbell v-if="history.category === 'gym'" />
            <Ticket v-else-if="history.category === 'tickets'" />
            <Shirt v-else-if="history.category === 'clothes'" />
            <Apple v-else-if="history.category === 'food'" />
            <Plane v-else-if="history.category === 'travel'" />
            <TrainTrack v-else />
        </div>
        <div className="ml-3 flex justify-between w-4/5">
            <div className="flex flex-col justify-center">
                <span className="text-base font-semibold">{{
                    uppercaseFirst(history.category)
                }}</span>
                <span className="text-[10px] font-semibold">{{
                    uppercaseFirst(history.name)
                }}</span>
            </div>
            <div>
                <span className="font-bold"
                    >{{ history.type === "outcome" ? "- " : ""
                    }}{{ history.budget }}$</span
                >
            </div>
        </div>
    </div>
</template>

<script>
import { Dumbbell } from "lucide-vue-next";
import { Ticket } from "lucide-vue-next";
import { Shirt } from "lucide-vue-next";
import { Apple } from "lucide-vue-next";
import { Plane } from "lucide-vue-next";
import { TrainTrack } from "lucide-vue-next";
export default {
    props: ["history"],
    components: {
        Dumbbell,
        Ticket,
        Shirt,
        Apple,
        Plane,
        TrainTrack,
    },
    methods: {
        handleChoose(id) {
            this.$router.push("/detail/" + id);
        },
        uppercaseFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },
};
</script>

<style></style>
