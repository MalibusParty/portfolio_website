<template>
    <div id="menu-flex-container">
        <div id="logo-flex-item"></div>
        <div id="github-flex-item"></div>
        <div id="menu-flex-item"></div>
    </div>
</template>


<script setup lang="ts">

</script>


<style scoped>
#menu-flex-container {
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(165deg, #191970, #121243);
    height: 85px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
}

#logo-flex-item {
    background-image: url('@/assets/LogoInv.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 10%;
    margin-right: 82%;
}

#github-flex-item {
    background-image: url('@/assets/GitHub-Mark-Light-120px-plus.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 4%;
    margin: 15px 0px 15px 0px;

}

#menu-flex-item {
    background-image: url('@/assets/burger_btn_placeholder.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 4%;
    margin: 10px 5px 10px 0px;
}
</style>