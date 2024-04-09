// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue;

createApp({
    data() {
        return {
            userEmails: []
        };
    },
    mounted() {
        // Inizializza un array vuoto per memorizzare le email
        const emails = [];

        // Ciclo per ottenere 10 email diverse
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const serverData = response.data;
                    const email = serverData.response;
                    emails.push(email);

                    // Quando abbiamo tutte e 10 le email, assegnale a userEmails
                    if (emails.length === 10) {
                        this.userEmails = emails;
                    }
                })
        }
    }
}).mount('#app');



