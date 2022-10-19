<template>
   <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-if="UserAcces ">
           <router-link to="/home">Home</router-link>
        </li>
        <li class="nav-item" v-if="UserAcces">
         <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item" v-if="UserAcces">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/produk">Produk</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/detail">Detail</router-link>
        </li>
      </ul>
    </div>
    <a class="btn btn-outline-danger my-2 my-sm-0"
    style="color:white;display:flex;background-color:#16213E"
    @click="out"
    href="/">
    <i class="fas fa-sign-out-alt"></i>Logout</a>
  </div>
</nav>
</template>

<script>
export default{
    name: 'NavbarNav',
    computed: {
      UserAcces(){
        return sessionStorage.getItem("role") ==='admin';
      }
    },
    methods: {
    out() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
}
</script>

<style scoped>
.navbar-brand{
     /* background-image: url(https://www.kibrispdr.org/data/892/wallpaper-polos-warna-hitam-27.jpg); */
      background-color: #16213E;
}
.navbar-nav{
    background-color: #16213E; 
}
a{
     color: white;
     text-decoration: none;
     padding: 25px;
}
</style>