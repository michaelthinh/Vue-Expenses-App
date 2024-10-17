import categories from "../mocks/categories";

export default function getCategoriesColor(cat) {
    const categoryNeed = categories.find((category) => category.id === cat);
}
