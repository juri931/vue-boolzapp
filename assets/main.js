const { createApp } = Vue;

import { contacts } from "./contacts.js";

createApp({
  data() {
    return {
      contacts,
      activeContact: null,
    };
  },
  methods: {},
  computed: {
    visibleContacts() {
      return this.contacts.filter((contact) => contact.visible);
    },
  },
  created() {
    this.activeContact = this.contacts[0];
  },
}).mount("#app");
