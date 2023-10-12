<template>
    <input
        :type="type"
        :placeholder="placeholder"
        class="form_input"
        v-model="value"
        @input="$emit('input', value)"
    />
</template>

<script>
export default {
    name: "InputComponent",
    data() {
        return {
            value: "",
        }
    },
    mounted() {
        this.value = this.defaultValue
    },
    props: {
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: "",
        },
        defaultValue: {
            type: String,
            default: "",
        },
    },
}
</script>

<style>
.form_input {
    width: 100%;
    height: 100%;
    border-radius: 0.6875rem;
    border: 1px solid var(--grayscale-300, #e6e6eb);
    padding: 0.62rem 0.63rem;
    font-family: Montserrat, "sans-serif";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.3px;
}
</style>
