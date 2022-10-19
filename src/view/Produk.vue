<template>
    <div id="produk">
        <Navbar/>
        <h1>Ini Halaman Produk Page</h1>
        <div class="table">
      <br />
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th>Nama Kapal</th>
            <th>Panjang</th>
            <th>Lebar</th>
            <th>Tinggi</th>
            <th>Sarat Kapal</th>
            <th>Nama Pemilik</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in kapals" :key="user.id">
            <td>{{ user.namakapal }}</td>
            <td>{{ user.panjang }}</td>
            <td>{{ user.lebar }}</td>
            <td>{{ user.tinggi }}</td>
            <td>{{ user.saratkapal }}</td>
            <td>{{ user.namapemilik }}</td>
          </tr>
        </tbody>
      </table>
       <table class="table table-dark table-striped">
        <thead>
      <tr>
      <th>Merk</th>
      <th>Bandara</th>
      <th>Tahun keluar</th>
      </tr>
      </thead>
      <tbody>
      <tr  v-for="user in pesawats" :key="user.id">
        <td>{{user.merk}}</td>
        <td>{{user.bandara}}</td>
        <td>{{user.tahun}}</td>
      </tr>
      </tbody>
      </table>
    </div> 
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import axios from "axios";

export default {
    name: "ProdukPage",
    components:{
        Navbar,
    },
     data() {
    return {
      form: {
        id: "",
        namakapal: "",
        panjang: "",
        lebar: "",
        tinggi: "",
        saratkapal: "",
        namapemilik: "",
      },
      formPesawat: {
        id: '',
          merk: '',
          bandara:'',
          tahun:'',
          image:'',
      },
      pesawats: '',
        updateSubmitPesawat: false,
      kapals: "",
      updateSubmit: false,
    };
  },
  
     mounted() {
        this.load();
        this.loadPesawat();
     if( !sessionStorage.getItem("USER_DATA")) {
        this.$router.push("/")
     }
    },
     methods: {
    load() {
      axios
        .get("http://localhost:3000/kapals")
        .then((res) => {
          this.kapals = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadPesawat(){
        axios.get('http://localhost:3000/pesawats').then(res => {
        this.pesawats = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
  }
}
</script>
<style scoped>
.table{
    padding: 5%;
}
</style>