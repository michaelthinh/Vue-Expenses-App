<template>
    <div>
        <category-item
            v-for="category in categories"
            :key="category.id"
            :category="category"
        ></category-item>
    </div>
</template>

<script>
import categories from "../../mocks/categories";
import CategoryItem from "./CategoryItem.vue";

export default {
    components: {
        "category-item": CategoryItem,
    },
    data() {
        return {
            categories: categories,
        };
    },
};
</script>

<style></style>
