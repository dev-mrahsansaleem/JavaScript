// object litrels
let user = {
  name: "none",
  age: 30,
  email: "none@gmail.com",
  blog: ["blog1", "blog2", "blog3"],
  login: function() {
    console.log("user login");
  },
  logout: function() {
    console.log("user logout");
  }
};
user.login();
user.logout();
