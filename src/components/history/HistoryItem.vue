<template>
    <div
        className="mt-4 mb-2  flex items-center cursor-pointer rounded-xl overflow-hidden"
    >
        <div
            className="w-[50px] h-[50px] bg-yellow-50 flex justify-center items-center rounded-xl"
        >
            <Dumbbell />
        </div>
        <div className="ml-3 flex justify-between w-4/5">
            <div className="flex flex-col justify-center">
                <span className="text-base font-semibold">Sport</span>
                <span className="text-[10px] font-semibold">Gymnast</span>
            </div>
            <div><span className="font-bold">- $30.00</span></div>
        </div>
    </div>
</template>

<script>
import { Dumbbell } from "lucide-vue-next";
export default {
    components: { Dumbbell },
};
</script>

<style></style>
