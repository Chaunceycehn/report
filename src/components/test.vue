<template>
    <form id="app" @submit="checkForm" action="/something" method="post" novalidate="true">
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
        </p>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
        <input type="text" name="name" id="name" v-model="name">
        <input type="email" name="email" id="email" v-model="email">
        <select name="movie" id="movie" v-model="movie">
            <option>Star Wars</option>
            <option>Vanilla Sky</option>
            <option>Atomic Blonde</option>
        </select>
        <input type="submit" value="Submit">
    </form>
</template>


<script>
export default {
  name: "test",
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      movie: null
    };
  },
  methods: {
    checkForm: function(e) {
      this.errors = [];
      if (!this.name) this.errors.push("Name required.");
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.errors.length) return true;
      e.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style scoped>
input,
select {
  margin-left: 10px;
}
</style>

