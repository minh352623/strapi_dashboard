const todoRoute = require("./todo.route");
module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
    },
  },
  ...todoRoute,
];
