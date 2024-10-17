<template>
    <div className="px-6 h-[calc(100%-50px)] overflow-y-auto">
        <!-- Title -->
        <div className="mb-6 font-semibold">
            <div className="flex items-center gap-3">
                <div className="cursor-pointer">
                    <router-link to="/"><arrow-left></arrow-left></router-link>
                </div>
                <span>Expense Info</span>
            </div>
        </div>
        <!-- Category -->
        <div className="flex gap-4 mb-4 items-center text-lg">
            <List />
            <div className="flex items-center">
                <span className="font-bold mr-3">Category:</span>
                {{ uppercaseAll(info.category) }}
            </div>
        </div>
        <!-- Budget -->
        <div className="flex gap-4 mb-4 items-center text-lg">
            <CircleDollarSign />
            <div className="flex items-center">
                <span className="font-bold mr-3">Budget:</span>
                {{ info.budget }}
            </div>
        </div>
        <!-- Type -->
        <div className="flex gap-4 mb-4 items-center text-lg">
            <BadgeAlert />
            <div className="flex items-center">
                <span className="font-bold mr-3">Type:</span>
                {{ uppercaseFirst(info.type) }}
            </div>
        </div>
        <!-- Date -->
        <div className="flex gap-4 mb-4 items-center text-lg">
            <Calendar />
            <div className="flex items-center">
                <span className="font-bold mr-3">Date:</span> {{ info.date }}
            </div>
        </div>
        <div className="mt-8">
            <button
                className="relative w-full border rounded-lg h-[50px] py-2 px-4 bg-primary text-sm text-white font-semibold"
                @click="
                    () => {
                        this.$router.push('/set-goal');
                    }
                "
            >
                Edit Expense
            </button>
        </div>
        <div className="mt-8">
            <button
                className="relative w-full border rounded-lg h-[50px] py-2 px-4 bg-red-500 text-sm text-white font-semibold"
                @click="deleteExpense(info.id)"
            >
                Delete Expense
            </button>
        </div>
    </div>
</template>

<script>
import {
    ArrowLeft,
    CircleDollarSign,
    List,
    Calendar,
    BadgeAlert,
} from "lucide-vue-next";

export default {
    components: {
        "arrow-left": ArrowLeft,
        CircleDollarSign,
        List,
        Calendar,
        BadgeAlert,
    },
    data() {
        return {
            info: null,
        };
    },
    methods: {
        uppercaseAll(string) {
            return string.toUpperCase();
        },
        uppercaseFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        deleteExpense(id) {
            this.$store.dispatch("deleteExpense", { id: id });
            this.$router.push("/");
        },
    },
    beforeMount() {
        console.log(this.$route.params.expenseId);
        let expenseInfo = null;
        expenseInfo = this.$store.getters.expenseInfo(
            this.$route.params.expenseId
        );
        this.info = expenseInfo;
    },
};
</script>

<style></style>
