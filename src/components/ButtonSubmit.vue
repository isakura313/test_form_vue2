<template>
    <button class="register_button" :disabled="disabled">Регистрация</button>
</template>

<script>
export default {
    name: "ButtonSubmit",
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style>
.register_button {
    font-family: Montserrat, sans-serif;
    padding: 0.62rem 4.34rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5625rem;
    border: 1px solid var(--green-600, #07a86e);
    color: var(--green-600, #07a86e);
    background-color: white;
}
.register_button:disabled {
    background-color: var(--green-600, #07a86e);
    color: var(--grayscale-50);
}
.register_button:not([disabled]):hover {
    background-color: var(--green-600, #07a86e);
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
</style>
