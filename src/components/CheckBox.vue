<template>
<div>
    <div class="checkbox">
      <div
        class="checkbox-custom-input-wrapper"
        :class="{ 'checkbox-custom-input-wrapper--checked': value }"
      >
        <input
          :id="id"
          class="checkbox-hidden-input"
          type="checkbox"
          :checked="value"
          @input="onInput"
        >
        <span
          v-if="value"
          class="checkbox-custom-input"
          :class="{ 'checkbox-custom-input--checked': value }"
        >
        <CheckIcon/>
        </span>
      </div>
    <label
      class="label"
      :for="id"
    >
      <slot />
    </label>
  </div>

</div>
</template>

<script>
import CheckIcon from './CheckIcon.vue'
export default {
    name: "CheckBox",
    props: {
        id: {
            type: String,
            default: '',
        },
        value: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onInput(event) {
            this.$emit('input', event.target.checked);
        },
    },
    components: {
        CheckIcon,
    },
}
</script>

<style>
.checkbox {
    display: flex;
    whitespace: no-wrap;
}

.checkbox-custom-input-wrapper {
    position: relative;
    border: 1px solid grey;
    border-radius: 5px;
    height: 16px;
    width: 16px;
}

.checkbox-custom-input {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: blue;
    color: white;
    font-weight: 400;
}

.checkbox-custom-input--checked {
    border-radius: 4px;
    background: var(--yellow-500, #FFD467);
    color: black;
}

.checkbox-hidden-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    margin: 0;
}


.label {
    margin-left: 8px;
}
</style>