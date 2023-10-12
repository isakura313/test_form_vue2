<template>
    <div class="form-component__wrapper">
        <template v-if="!isResult">
            <div class="form-component">
                <h3 class="form-component__header">Регистрация</h3>
            </div>
            <div class="hr_small" />
            <div class="form-component">
                <div class="form-component__toggle">
                    <ToggleButton @setCheckboxVal="updatePublic" />
                    <h5 class="form-component__h5">Публичный профиль</h5>
                </div>
                <p class="form-component__p">
                    Включает профиль для просмотра другими пользователями по
                    ссылке
                </p>

                <div class="hr"></div>

                <h4 class="form-component__h4">Данные</h4>
                <div class="form_wrapper">
                    <div>
                        <InputComponent
                            placeholder="Имя"
                            type="text"
                            :default-value="defaultValues['username']"
                            @input="updateName"
                        />
                        <span class="error_span">
                            {{
                                errors["username"] ? errors["username"][0] : ""
                            }}</span
                        >
                    </div>
                    <div style="grid-column: 1/2; grid-row: 2/3">
                        <InputComponent
                            placeholder="Email"
                            type="email"
                            v-model="email"
                            :default-value="defaultValues['email']"
                            @input="updateEmail"
                        />
                        <span class="error_span">
                            {{
                                errors["email"] ? errors["email"][0] : ""
                            }}</span
                        >
                    </div>
                    <div style="grid-column: 1/2; grid-row: 3/4">
                        <InputComponent
                            placeholder="Пароль"
                            type="password"
                            v-model="password"
                            @input="updatePassword"
                        />
                        <span class="error_span">
                            {{
                                errors["password"] ? errors["password"][0] : ""
                            }}
                        </span>
                    </div>
                    <DropdownComponent
                        :options="options"
                        class="select"
                        @input="updatePost"
                    />
                    <div>
                        <InputComponent
                            placeholder="Повторите пароль"
                            type="password"
                            v-model="confirm_password"
                            style="grid-column: 2/3; grid-row: 3/4"
                            @input="updateConfirmPassword"
                        />
                        <span class="error_span">
                            {{
                                errors["password_repeat"]
                                    ? errors["password_repeat"][0]
                                    : ""
                            }}</span
                        >
                    </div>
                </div>

                <div class="hr hr_bottom"></div>
                
                <div class="form-component__checkbox_wrapper">
                    <CheckBox v-model="checked" id="unique" />
                    <p class="form-component__p">
                        Нажимая на кнопку “Регистрация”, я подтверждаю свое
                        согласение с политикой конфиденциальности и обработки
                        персональных данных
                    </p>
                </div>
                <div class="form-component__btn_wrapper">
                    <ButtonSubmit
                        @click.native="submitForm"
                        :disabled="!checked"
                    />
                </div>
            </div>
        </template>
        <template v-else>
            <div class="form-component">
                <h3 class="form-component__header form-component__header_final">
                    Регистрация успешно завершена
                </h3>
            </div>
        </template>
    </div>
</template>

<script>
import ButtonSubmit from "./ButtonSubmit.vue"
import ToggleButton from "./ToggleButton.vue"
import CheckBox from "./CheckBox.vue"
import DropdownComponent from "./DropdownComponent.vue"
import InputComponent from "./InputComponent.vue"
import { sendForm } from "../services"

export default {
    name: "FormComponent",
    components: {
        ButtonSubmit,
        ToggleButton,
        CheckBox,
        DropdownComponent,
        InputComponent,
    },
    props: {
        defaultValues: {
            type: Object,
        },
    },
    data() {
        return {
            checked: true,
            public: false,
            name: "",
            email: "",
            password: "",
            postOfEmployee: "",
            confirm_password: "",
            isResult: false,
            usernameValidation: "",
            emailValidation: "",
            passwordValidation: "",
            passwordConfirmedValidation: "",
            errors: {},
            options: [
                { value: 1, name: "Менеджер" },
                { value: 2, name: "Менеджер по продажам" },
                { value: 3, name: "Региональный директор" },
            ],
        }
    },
    methods: {
        updatePublic(value) {
            this.public = value
        },
        updatePost(value) {
            this.postOfEmployee = value
        },
        updateName(value) {
            this.name = value
        },
        updateEmail(value) {
            this.email = value
        },
        updatePassword(value) {
            this.password = value
        },
        updateConfirmPassword(value) {
            this.confirm_password = value
        },
        submitForm() {
            const value = {
                public: Number(this.public),
                username: this.name,
                role: this.postOfEmployee.value,
                email: this.email,
                password: this.password,
                password_repeat: this.confirm_password,
            }
            console.log(value, "this state")
            sendForm(value)
                .then((res) => {
                    if (res.data.success) {
                        this.isResult = true
                    } else {
                        this.errors = res.data.errors
                    }

                    console.log(res)
                })
                .catch((error) => {
                    console.log(error)

                    // TODO обработка ошибок
                })
        },
    },
}
</script>

<style>
.form-component__wrapper {
    background-color: #fff;
    width: 90%;
    margin: 0 auto;
    border-radius: 0.94rem;
}
.form-component {
    padding-top: 1.69em;
    padding-left: 1.25em;
    padding-right: 1.25em;
}

.hr_small {
    height: 1px;
    background: var(--grayscale-50, #000000);
}

.hr {
    height: 2px;
    background-color: #d9d9d9;
}
.hr_bottom {
    margin-top: 30px;
    margin-bottom: 25.5px;
}

.form-component__header {
    color: var(--grayscale-900, #000);
    font-family: Montserrat, sans-serif;
    font-size: 1.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.6875rem;
    padding-bottom: 1.69rem;
}

.form-component__toggle {
    display: flex;
    align-items: center;
    margin-bottom: 0.94rem;
}
.form-component__header_final {
    text-align: center;
}
.form-component__h5 {
    color: var(--grayscale-900, #000);
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1875rem;
    margin-left: 0.94rem;
}

.form-component__p {
    color: var(--grayscale-700, #696977);
    font-family: Montserrat, "sans-serif";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.1875rem;
    margin-bottom: 1.87rem;
}

.form_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.13rem;
    grid-row-gap: 1.56rem;
    grid-template-rows: repeat(3, 1fr);
}

.form-component__h4 {
    color: var(--grayscale-900, #000);
    font-family: Montserrat, "sans-serif";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1875rem;
    margin-top: 1.25rem;
    margin-bottom: 1.56rem;
}
.form-component__checkbox_wrapper {
    display: flex;
    margin-bottom: 35px;
}
.form-component__p {
    color: #000;
    font-family: Montserrat, "sans-serif";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
}
.form-component__btn_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 35px;
}
.error_span {
    color: red;
    font-size: 10px;
    font-family: Montserrat, "sans-serif";
    letter-spacing: 0.4px;
}
</style>
