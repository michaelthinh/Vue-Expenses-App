<template>
    <div
        className="w-screen h-screen bg-yellow-100 flex items-center justify-center "
    >
        <div
            className="h-screen w-screen  bg-white pt-6 overflow-hidden sm:w-[350px] sm:h-[700px] sm:rounded-none"
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
