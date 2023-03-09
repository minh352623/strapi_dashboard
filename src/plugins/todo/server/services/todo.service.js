"use strict";

module.exports = ({ strapi }) => ({
  async get(ctx) {
    try {
      // const page = Number(ctx.request.query.page) - 1 || 0;
      // const limit = Number(ctx.request.query.limit) || 10;
      // const email = ctx.request.user;
      // const response = await strapi
      //   .query("plugin::investment.activity")
      //   .findMany({
      //     populate: {
      //       user: {
      //         where: {
      //           email,
      //         },
      //         select: ["email"],
      //       },
      //     },
      //     orderBy: { time: "desc" },
      //   });

      // const newRes = response.filter((item) => item.user !== null);

      // const data = newRes.slice(page * limit, page * limit + limit);

      return { data: "data" };
    } catch (error) {
      ctx.throw(400, error);
    }
  },

  async create(ctx) {
    try {
      console.log("asdasd");

      const body = ctx.request.body;

      const dataImage = [];
      console.log(body);
      console.log("adsd", dataImage);

      await strapi.query("plugin::todo.todo").create({
        data: {
          name_todo: body.name_todo,
          description: body.description,
          image: body.image,
          images: body.images,
        },
      });

      return {
        message: "success",
      };
    } catch (error) {
      console.log(error);
      return ctx.throw(400, { message: "Please try again!" });
    }
  },
});
