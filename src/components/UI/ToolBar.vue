<template>
    <div
        className="left-0 bottom-0 w-full h-[50px] bg-yellow-50 flex items-center justify-center "
        flex
        justify-center
    >
        <router-link to="/set-goal">
            <div
                className="w-[55px] h-[35px] flex items-center justify-center bg-white rounded-lg cursor-pointer"
            >
                <font-awesome-icon :icon="['fas', 'plus']" color="#000" />
            </div>
        </router-link>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
