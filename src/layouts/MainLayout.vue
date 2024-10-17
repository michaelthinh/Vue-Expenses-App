<template>
    <div
        className="w-screen h-screen bg-yellow-100 flex items-center justify-center "
    >
        <div
            className="h-screen w-screen sm:w-[350px] sm:h-[700px] bg-white pt-6 flex flex-col justify-between rounded-2xl overflow-hidden"
        >
            <slot></slot>
            <tool-bar></tool-bar>
        </div>
    </div>
</template>

<script>
import ToolBar from "../components/UI/ToolBar.vue";
export default {
    components: {
        "tool-bar": ToolBar,
    },
};
</script>

<style></style>
