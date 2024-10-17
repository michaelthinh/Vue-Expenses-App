<template>
    <div className="px-6 h-[calc(100%-50px)] overflow-y-auto">
        <!-- Title -->
        <div className="mb-6 font-semibold">
            <div className="flex items-center gap-3">
                <div className="cursor-pointer">
                    <router-link to="/set-goal"
                        ><arrow-left></arrow-left
                    ></router-link>
                </div>
                <span>Select Category</span>
            </div>
        </div>
        <category-list></category-list>
        <div className="mt-8">
            <button
                className="relative w-full border rounded-lg h-[50px] py-2 px-4 bg-primary text-sm text-white font-semibold"
                @click="
                    () => {
                        this.$router.push('/set-goal');
                    }
                "
            >
                Select
            </button>
        </div>
    </div>
</template>

<script>
import { ArrowLeft } from "lucide-vue-next";

import CategoryList from "../components/categories/CategoryList.vue";
export default {
    components: {
        "arrow-left": ArrowLeft,
        "category-list": CategoryList,
    },
    data() {
        return {};
    },

    methods: {},
};
</script>

<style></style>
