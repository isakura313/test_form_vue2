<template>
    <div id="app">
        <form-component
            :default-values="{
                username: 'default username',
                email: 'default email',
            }"
        />
    </div>
</template>

<script>
import FormComponent from "./components/FormComponent"

export default {
    name: "App",
    components: {
        FormComponent,
    },
}
</script>

<style>
#app {
    background-color: var(--grayscale-50);
    min-height: 100vh;
    padding-top: 25px;
}
</style>
