<template>
    <div class="container">
        <h1>Login</h1>
        <el-form :model="form">
            <el-form-item label="账号">
                <el-input v-model="form.account"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>

            <el-button @click="loginIn" type="primary">login</el-button>
        </el-form>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { login } from '@/api';
import { useLoginStore } from '@/stores';
import { useRouter, useRoute } from 'vue-router'
const loginStore = useLoginStore()
const { LOGIN_IN } = loginStore
const router = useRouter();
const route = useRoute();

const form = reactive({
    account: '',
    password: '',
})
function loginIn() {
    //登录
    LOGIN_IN(form.account)
    login().then(res => {
        console.log(res.data);
        router.push({
            name: 'home'
        })
    })
}
</script>
<style scoped>
.container {
    width: 300px;
    height: 200px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}

.container>h1 {
    text-align: center;
    padding: 10px 0;
}
</style>