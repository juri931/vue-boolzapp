const { createApp } = Vue;

import { contacts } from "./contacts.js";

createApp({
  data() {
    return {
      contacts,
    };
  },
  methods: {},
  computed: {
    visibleContacts() {
      return contacts.filter((contact) => contact.visible);
    },
  },
  created() {},
}).mount("#app");
