<template>
  <div class="Register">
    <h1>This is an Register page</h1>
    <div class="input-container">
      <input type="text" placeholder="First Name" v-model="firstName" />
    </div>
    <div class="input-container">
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
    <div class="input-container">
      <input type="text" placeholder="Phone Number" v-model="phoneNumber" />
    </div>
    <div class="input-container">
      <input type="text" placeholder="Password" v-model="password" />
    </div>
    <button @click="submit">submit</button>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: ""
    };
  },
  methods: {
    submit() {
      console.log(this);
      fetch(
        `http://localhost:3000/api/adduser/${this.phoneNumber}/${this.firstName}/${this.lastName}/${this.password}`,
        { mode: "cors" }
      )
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(function(response) {
          console.log("Response", response);
        });
    }
  }
};
</script>
