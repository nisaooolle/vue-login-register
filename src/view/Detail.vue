<template>
  <div id="detail">
    <Navbar />
    <h1>Ini Halaman Detail Page</h1>
    <!-- KAPAL -->
    <div class="table">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        ADD KAPAL
      </button>
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
            <th>Action</th>
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
            <td style="margin-right: 10%">
              <button
                class="klik"
                @click="edit(user)"
                data-bs-toggle="modal"
                data-bs-target="#modalEdit"
              >
                <i class="fa-solid fa-pen-to-square"></i>Edit
              </button>
              ||
              <button class="klik" @click="del(user)">
                <i class="fa-solid fa-eraser"></i>Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- tabel pesawat -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalPesawat"
      >
        ADD PESAWAT
      </button>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th>Merk</th>
            <th>Bandara</th>
            <th>Tahun keluar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in pesawats" :key="user.id">
            <td>{{ user.merk }}</td>
            <td>{{ user.bandara }}</td>
            <td>{{ user.tahun }}</td>
            <td style="margin-right: 10%">
              <button
                class="klik"
                @click="editPesawat(user)"
                data-bs-toggle="modal"
                data-bs-target="#modalEdit"
              >
                <i class="fa-solid fa-pen-to-square"></i>Edit
              </button>
              ||
              <button class="klik" @click="delPesawat(user)">
                <i class="fa-solid fa-eraser"></i>Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- modal kapal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Form <span v-show="!updateSubmitKapal">Tambah</span>
              <span v-show="updateSubmitKapal">Update</span>
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="add">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Nama Kapal :
                </label>
                <input
                  v-model="form.namakapal"
                  required
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Panjang :</label
                >
                <input
                  v-model="form.panjang"
                  required
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Lebar :</label
                >
                <input
                  v-model="form.lebar"
                  required
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Tinggi :
                </label>
                <input
                  v-model="form.tinggi"
                  required
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Sarat kapal :</label
                >
                <input
                  v-model="form.saratkapal"
                  required
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Nama Pemilik :
                </label>
                <input
                  v-model="form.namapemilik"
                  required
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="close"
              >
                Close
              </button>
              <button
                type="submit"
                class="btn-primary"
                data-bs-dismiss="modal"
                v-show="!updateSubmit"
              >
                Save
              </button>
              <button type="button" v-show="updateSubmit" @click="update(form)">
                Update</button
              ><br />
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- modal pesawat -->
    <div
      class="modal fade"
      id="exampleModalPesawat"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Form <span v-show="!updateSubmitPesawat">Tambah</span>
              <span v-show="updateSubmitPesawat">Update</span>
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addPesawat">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Merk :
                </label>
                <input
                  v-model="formPesawat.merk"
                  required
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Bandara :</label
                >
                <input
                  v-model="formPesawat.bandara"
                  required
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Tahun :</label
                >
                <input
                  v-model="formPesawat.tahun"
                  required
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="close"
              >
                Close
              </button>
              <button type="submit" class="btn-primary"
              v-show="!updateSubmitPesawat"  data-bs-dismiss="modal">
                Save
              </button>
              <button type="button" v-show="updateSubmitPesawat" @click="updatePesawat(formPesawat)">
                Update</button
              ><br />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";

export default {
  name: "DetailPage",
  components: {
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
      kapals: "",
      updateSubmit: false,
      formPesawat: {
        id: "",
        merk: "",
        bandara: "",
        tahun: "",
      },
      pesawats: "",
      updateSubmitPesawat: false,
    };
  },
  mounted() {
    this.load();
    this.loadPesawat();
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
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
    loadPesawat() {
      axios
        .get("http://localhost:3000/pesawats")
        .then((res) => {
          this.pesawats = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/kapals", this.form).then(() => {
        this.load();
        this.form.namakapal = "";
        this.form.panjang = "";
        this.form.lebar = "";
        this.form.tinggi = "";
        this.form.saratkapal = "";
        this.form.namapemilik = "";
      });
    },
    addPesawat() {
      axios
        .post("http://localhost:3000/pesawats", this.formPesawat)
        .then(() => {
          this.loadPesawat();
          this.formPesawat.merk = "";
          this.formPesawat.bandara = "";
          this.formPesawat.tahun = "";
        });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.namakapal = user.namakapal;
      this.form.panjang = user.panjang;
      this.form.lebar = user.lebar;
      this.form.tinggi = user.tinggi;
      this.form.saratkapal = user.saratkapal;
      this.form.namapemilik = user.namapemilik;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/kapals/" + form.id, {
          namakapal: this.form.namakapal,
          panjang: this.form.panjang,
          lebar: this.form.lebar,
          tinggi: this.form.tinggi,
          saratkapal: this.form.saratkapal,
          namapemilik: this.form.namapemilik,
        })
        .then(() => {
          this.load();
          this.form.id = "";
          this.form.namakapal = "";
          this.form.panjang = "";
          this.form.lebar = "";
          this.form.tinggi = "";
          this.form.saratkapal = "";
          this.form.namapemilik = "";
          this.form.image = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editPesawat(user) {
      this.updateSubmitPesawat = true;
      this.formPesawat.id = user.id;
      this.formPesawat.merk = user.merk;
      this.formPesawat.bandara = user.bandara;
      this.formPesawat.tahun = user.tahun;
    },
    updatePesawat(formPesawat) {
      return axios
        .put("http://localhost:3000/pesawats/" + formPesawat.id, {
          merk: this.formPesawat.merk,
          bandara: this.formPesawat.bandara,
          tahun: this.formPesawat.tahun,
        })
        .then(() => {
          this.loadPesawat();
          this.formPesawat.id = "";
          this.formPesawat.merk = "";
          this.formPesawat.bandara = "";
          this.formPesawat.tahun = "";
          this.updateSubmitPesawat = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/kapals/" + user.id).then(() => {
        this.load();
        let index = this.users.indexOf(
          this.namakapal,
          this.panjang,
          this.lebar,
          this.tinggi,
          this.saratkapal,
          this.namapemilik
        );
        this.users.splice(index, 1);
      });
    },
    delPesawat(user) {
      axios.delete("http://localhost:3000/pesawats/" + user.id).then(() => {
        this.loadPesawat();
        let index = this.users.indexOf(
          this.merk,
          this.bandara,
          this.tahun
        );
        this.users.splice(index, 1);
      });
    },
    close() {
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.table {
  padding: 5%;
}
</style>