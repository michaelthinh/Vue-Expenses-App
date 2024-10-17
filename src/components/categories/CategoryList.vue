<template>
    <div>
        <category-item
            v-for="category in categories"
            :key="category.id"
            :chosen="chosenCategory"
            :category="category"
        ></category-item>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import categories from "../../mocks/categories";
import CategoryItem from "./CategoryItem.vue";

export default {
    components: {
        "category-item": CategoryItem,
    },
    computed: {
        ...mapGetters(["chosenCategory"]),
    },
    data() {
        return {
            categories: categories,
        };
    },
};
</script>

<style></style>
