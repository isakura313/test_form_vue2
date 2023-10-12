<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
        <div
            class="selected"
            :class="{ open: open, not_selected: !Boolean(selected) }"
            @click="open = !open"
        >
            {{ selected ? selected.name : "Должность" }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div
                v-for="(option, i) of options"
                :key="i"
                @click="selectOption(option)"
            >
                {{ option.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },

        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            selected: null,
            open: false,
        }
    },
    mounted() {
        this.$emit("input", this.selected)
    },
    methods: {
        selectOption(option) {
            this.selected = option
            this.open = false
            this.$emit("input", option)
        },
    },
}
</script>

<style scoped>
.not_selected {
    color: var(--grayscale-600, #9292a0) !important;
    /* font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px !important; */
}
.custom-select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    height: 47px;
    line-height: 47px;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
}

.custom-select .selected {
    font-size: 13px;
    color: var(--grayscale-900, #000);
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 400;
    background-color: white;
    border-radius: 0.69rem;
    border: 1px solid rgba(230, 230, 235, 1);
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .selected.open {
    /* border: 1px solid #ad8225; */
    border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
}

.custom-select .items {
    color: var(--grayscale-900, #000);
    font-family: Montserrat, sans-serif;
    font-size: 13px;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid rgba(230, 230, 235, 1);
    border-left: 1px solid rgba(230, 230, 235, 1);
    border-bottom: 1px solid rgba(230, 230, 235, 1);
    position: absolute;
    background-color: white;
    left: 0;
    right: 0;
    z-index: 1;
}

.custom-select .items div {
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .items div:hover {
    background-color: rgba(230, 230, 235, 1);
}

.selectHide {
    display: none;
}
</style>
