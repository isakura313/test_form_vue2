<template>
    <label class="switch">
        <input type="checkbox" @click="toggleCheckbox" />
        <div class="slider round"></div>
    </label>
</template>

<script>
export default {
    name: "ToggleButton",
    data() {
        return {
            checkbox: false,
        }
    },
    methods: {
        toggleCheckbox() {
            this.checkbox = !this.checkbox
            this.$emit("setCheckboxVal", this.checkbox)
        },
    },
}
</script>

<style>
.switch {
    position: relative;
    display: inline-block;
    width: 2.5rem;
    height: 1.4rem;
}

.switch input {
    display: none;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 1.3rem;
    width: 1.3rem;
    left: -2px;
    /* top: 1px; */
    background-color: white;
    transition: 0.4s;
    border: 1px solid var(--grayscale-50);
}

input:checked + .slider {
    background-color: rgba(125, 122, 255, 1);
}

input:focus + .slider {
    box-shadow: 0 0 1px rgba(125, 122, 255, 1);
}

input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
