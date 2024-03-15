const { createApp } = Vue;

import contacts from "contacts.js";

createApp({
  data() {
    return {
      contacts,
    };
  },
  methods: {},
  created() {
    console.log(contacts);
  },
}).mount("#app");
