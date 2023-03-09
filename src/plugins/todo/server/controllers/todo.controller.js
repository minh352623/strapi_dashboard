"use strict";

module.exports = ({ strapi }) => ({
  get(ctx) {
    return strapi.plugin("todo").service("todoService").get(ctx);
  },
  create(ctx) {
    return strapi.plugin("todo").service("todoService").create(ctx);
  },
});
