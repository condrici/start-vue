const app = Vue.createApp({
    data() {
        return {
            showDiv: true,
            title: 'My app title',
            number: 0
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
});

app.mount('#app');