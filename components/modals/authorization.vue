<template>
    <Modal :show="show" modal-name="authorization" @close="close()">
        <Input />
    </Modal>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Authorization',
    props: {
        show: {
            type: Boolean,
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
});
</script>

<style lang="scss" scoped>
//
</style>
