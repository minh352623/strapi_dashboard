const yup = require("yup");
module.exports = [
  {
    method: "GET",
    path: "/api/v1/todo",
    handler: "todoController.get",
    config: {
      policies: [],
      auth: false,
      middlewares: [],
    },
  },
  {
    method: "POST",
    path: "/api/v1/todo/create",
    handler: "todoController.create",
    config: {
      policies: [],
      auth: false,
      middlewares: [],
    },
  },
];
