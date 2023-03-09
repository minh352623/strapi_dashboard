import { request } from "@strapi/helper-plugin";
import axios from "axios";
import instance from "../utils/axiosInstance";

class todoRequest {
  async getAllTodo() {
    return await instance.get("/todo/api/v1/todo", {
      method: "GET",
    });
  }
  async createTodo(data) {
    return await instance({
      method: "POST",
      url: "/todo/api/v1/todo/create",
      data: data,
    });
  }
  // async createTodo(data) {
  //   return await request(`/todo/api/v1/todo/create`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     body: data,
  //   });
  // }
  async updateInvestment(data, id) {
    return await request(`/investment/api/v1/product/${id}`, {
      method: "PUT",

      body: data,
    });
  }

  async deleteInvestment(id) {
    return await request(`/investment/api/v1/product/${id}`, {
      method: "DELETE",
    });
  }
}

export default new todoRequest();
