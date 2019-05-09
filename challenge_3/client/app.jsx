$.ajax({
  type: "GET",
  url: `/`,
  success: this.geet.bind(this),
  error: function (request, status, error) {
    console.log(error);
  }
});