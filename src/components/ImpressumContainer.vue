<template>
    <div class="impressum-container">
        <div class="impressum-item">
            <HeaderLineListComponent>
                <template #headline><h2>Impressum</h2></template>
                <template #default>
                    <h3>Angaben gemäß §5 TMG</h3>
                    <ul>
                        <li>Felix Ruf</li>
                        <li>Schafhofweg 9</li>
                        <li>97816 Lohr am Main</li>
                    </ul>
                    <h3>Kontakt</h3>
                    <ul><li>felixruf@live.de</li></ul>
                </template>
            </HeaderLineListComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeaderLineListComponent from '../components/HeaderLineListComponent.vue';

</script>

<style scoped>
.impressum-container {
    border-top: solid 5px #FF7A50;
    /* padding: 5% 30%; */
    display: grid;
    place-content: center;
}

.impressum-item {
    padding-top: 30%;
    padding-bottom: 15%;
    width: 600px;
}
</style>