export default {
  data: () => ({
    data: {},
  }),
  methods: {
    getApiData(url, queryParams = {}) {
      Object.keys(queryParams).forEach((key) => {
        if (queryParams[key] == "") delete queryParams[key];
      });
      const urlQueryParams = new URLSearchParams(queryParams).toString();
      const fullUrl = urlQueryParams ? `${url}&${urlQueryParams}` : url;

      fetch(fullUrl)
        .then((response) => response.json())
        .then((response) => {
          this.data = response;
        });
    },
  },
};
