<template>
    <div class="kotak_login"
    style="background-image: linear-gradient(gray,pink)"
    >
        <h4 class="tulisan_login">Silahkan Login</h4>
        <form @submit="login">
            <label >Username</label>
            <input 
            type="text" required
            name="username"
            v-model="form.username"
            class="form_login"
            placeholder="Masukkan Username atau Email"
            />
            <label>Password</label>
            <input 
            type="password"
            name="password"
            v-model="form.password"
            class="form_login"
            placeholder="Masukkan Password.."
            />
            <button type="submit" class="btn btn-primary poll" >Login</button>
            <br>
            <br>
            <center>
        <!-- <p class="f00ter"> -->
            <a href="/register" class="registerdonk">Register</a>
            <span class="notReg">Jika Tidak Memiliki Akun</span>
        <!-- </p> -->
        </center>
        </form>
        
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'LoginPage',
    data() {
        return {
            form: {
                username: "",
                password: "",
                useres: {},
            },
        };
    },
    methods: {
        async getUser() {
            const user = await axios.get("http://localhost:3000/akuns");
            this.useres = user.data;
        },
        // fungsi tombol login 
        login(e) {
            e.preventDefault();
            const login = this.useres.find(
                (data) =>
                 data.username === this.form.username &&
                 data.password === this.form.password
            );
        //  kondisi jika akun benar akan menuju langsung ke page home klo slaah muncul alert
            if (login === undefined) {
                alert("Username Or Password Not Found");
            } else{
                var convertToString = JSON.stringify(login);
                sessionStorage.setItem("USER_DATA", convertToString);
                sessionStorage.setItem("role", login.role);
                this.$router.push("/home");
                window.location.reload();
            }
        },
    },
    mounted() {
        this.getUser();
        // fungsi toogle pda app.vue
        this.$emit("toggleBar")
    },
}
</script>