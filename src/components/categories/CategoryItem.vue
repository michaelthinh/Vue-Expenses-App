<template>
    <label
        :for="category.id"
        className="mt-4 mb-2  flex items-center cursor-pointer rounded-xl overflow-hidden"
        @click="setCategory({ value: category.id })"
    >
        <div
            className="w-[50px] h-[50px] flex justify-center items-center rounded-xl"
            :style="{ backgroundColor: category.color }"
        >
            <Dumbbell v-if="category.value === 'gym'" />
            <Ticket v-else-if="category.value === 'tickets'" />
            <Shirt v-else-if="category.value === 'clothes'" />
            <Apple v-else-if="category.value === 'food'" />
            <Plane v-else-if="category.value === 'travel'" />
            <TrainTrack v-else />
        </div>
        <div className="ml-3 flex justify-between w-4/5">
            <div className="flex flex-col justify-center">
                <span className="text-base font-semibold">{{
                    category.title
                }}</span>
            </div>
            <div className="flex items-center">
                <input
                    :id="category.id"
                    type="checkbox"
                    className="hidden peer"
                />
                <label
                    :for="category.id"
                    :className="
                        chosenCategory === category.id
                            ? 'flex items-center justify-center w-6 h-6 rounded-full border-2 border-gray-400 peer-checked:bg-primary peer-checked:border-primary'
                            : 'flex items-center justify-center w-6 h-6 rounded-full border-2 border-gray-400 '
                    "
                >
                    <svg
                        className="w-4 h-4 text-white hidden peer-checked:inline"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                </label>
            </div>
        </div>
    </label>
</template>

<script>
import { Dumbbell } from "lucide-vue-next";
import { Ticket } from "lucide-vue-next";
import { Shirt } from "lucide-vue-next";
import { Apple } from "lucide-vue-next";
import { Plane } from "lucide-vue-next";
import { TrainTrack } from "lucide-vue-next";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
    components: {
        Dumbbell,
        Ticket,
        Shirt,
        Apple,
        Plane,
        TrainTrack,
    },
    props: ["category", "chosen"],
    computed: {
        ...mapGetters(["chosenCategory"]),
    },
    methods: {
        ...mapActions(["setCategory"]),
        handleClick() {
            console.log(chosenCategory);
        },
    },
};
</script>

<style></style>
