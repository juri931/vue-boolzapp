const { createApp } = Vue;
let DateTime = luxon.DateTime;

import { contacts } from "./contacts.js";

createApp({
  data() {
    return {
      contacts,
      activeContact: {},
      newMessage: "",
    };
  },
  watch: {
      doSearch() {
        this.contacts.forEach((contact) => {
          contact.visible = contact.name
            .toUpperCase()
            .includes(this.contactToSearch.toUpperCase());
        });
      },
    },
    
  methods: {
    addNewMessage() {
      const newMessage = this.generateMessage(this.newMessage, true);
      this.activeContact.messages.push(newMessage);
      this.newMessage = "";

      const answerMsg = this.generateMessage("Ok!", false);
      setTimeout(() => this.activeContact.messages.push(answerMsg), 3000);
    },

    generateMessage(messageText, isSent) {
      const status = isSent ? "sent" : "received";
      return {
        // date: DateTime.now().selectLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
        message: messageText,
        status,
      };
    },

    doSearch() {
      this.contacts.forEach((contact) => {
        contact.visible = contact.name
          .toUpperCase()
          .includes(this.contactToSearch.toUpperCase());
      });
    },
  },
  computed: {
    visibleContacts() {
      return this.contacts.filter((contact) => contact.visible);
    },
  },
  created() {
    this.activeContact = this.contacts[0];
  },
}).mount("#app");
