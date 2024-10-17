const categories = [
    { id: "gym", title: "Gym", color: "#C5E9DF", value: "gym" },
    {
        id: "tickets",
        title: "Tickets",
        color: "#D8EAE5",
        value: "tickets",
    },
    {
        id: "clothes",
        title: "Clothes",
        color: "#E6E5FC",

        value: "clothes",
    },
    { id: "food", title: "Food", color: "#EFC8A8", value: "food" },
    {
        id: "travel",
        title: "Travel",
        color: "#B7D7EB",

        value: "travel",
    },
    {
        id: "transport",
        title: "Transport",
        color: "#F7C3B6",

        value: "transport",
    },
];

export const componentsImport = categories.map((category) => category.icon);

export default categories;
