export default {
  data: () => ({
    data: {},
  }),
  methods: {
    getApiData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.data = response;
        });
    },
  },
};
