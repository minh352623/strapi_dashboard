import {
  Box,
  Button,
  DatePicker,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalLayout,
  TextInput,
  Tooltip,
  Typography,
} from "@strapi/design-system";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Information } from "@strapi/icons";
import todoRequest from "../../api/todo.js";
import axios from "axios";
const schema = yup.object({
  name: yup.string().min(2, "Name less than 2 characters"),
});

const Modal = ({ handleChangeShow, hanldeAddTodo }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [error, setError] = useState();

  const submitForm = async (values) => {
    if (Object.keys(values).length === 0)
      return setError("Dữ liệu không được trống!");
    try {
      const images = [...values.images, values.image];
      const formData = new FormData();
      [...images].forEach((item) => {
        console.log(item);
        formData.append("files", item);
      });
      const responseImage = await axios({
        method: "POST",
        url: "http://localhost:1337/api/upload",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
      console.log(responseImage);
      const arrNew = [];
      for (let i in responseImage.data) {
        if (i > 0) {
          arrNew.push(responseImage.data[i].id);
        }
      }
      const data = {
        description: values.description,
        name_todo: values.name,
        image: responseImage.data[0].id,
        images: arrNew,
      };

      console.log(data);

      const response = await todoRequest.createTodo(data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }

    // handleChangeShow(false);
  };
  return (
    <ModalLayout
      onClose={() => handleChangeShow((prev) => !prev)}
      labelledBy="Add todo"
    >
      <form onSubmit={handleSubmit(submitForm)}>
        <ModalHeader>
          <Typography
            fontWeight="bold"
            textColor="neutral800"
            as="h2"
            id="title"
          >
            Add todo
          </Typography>
        </ModalHeader>
        <ModalBody>
          <Box padding={2}>
            {error && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                }}
              >
                {error}
              </p>
            )}
          </Box>
          <Box padding={2}>
            <TextInput
              placeholder="This is a name placeholder"
              label="Name"
              name="name"
              onChange={(e) => setValue("name", e.target.value)}
              value={watch("name")}
              style={{
                width: "100%",
                borderRadius: "8px",
                padding: "8px 12px",
                outline: "none",
                marginTop: "4px",
              }}
            />
            {errors?.name && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                {errors.name.message}
              </p>
            )}
          </Box>
          <Box padding={2}>
            <TextInput
              placeholder="This is a name placeholder"
              label="Cotact"
              name="contact"
              onChange={(e) => setValue("contact", e.target.value)}
              value={watch("contact")}
              style={{
                width: "100%",
                borderRadius: "8px",
                padding: "8px 12px",
                outline: "none",
                marginTop: "4px",
              }}
            />
            {errors?.contact && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                {errors.contact.message}
              </p>
            )}
          </Box>
          <Box padding={2}>
            <TextInput
              placeholder="This is a name placeholder"
              label="Description"
              name="description"
              onChange={(e) => setValue("description", e.target.value)}
              value={watch("description")}
              style={{
                width: "100%",
                borderRadius: "8px",
                padding: "8px 12px",
                outline: "none",
                marginTop: "4px",
              }}
            />
            {errors?.description && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                {errors.description.message}
              </p>
            )}
          </Box>
          <Box padding={2}>
            <TextInput
              placeholder="This is a name placeholder"
              label="Category"
              name="category"
              onChange={(e) => setValue("category", e.target.value)}
              value={watch("category")}
              style={{
                width: "100%",
                borderRadius: "8px",
                padding: "8px 12px",
                outline: "none",
                marginTop: "4px",
              }}
            />
            {errors?.category && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                {errors.category.message}
              </p>
            )}
          </Box>
          <Box padding={2}>
            <input
              type="file"
              name="image"
              onChange={(e) => setValue("image", e.target.files[0])}
            />
          </Box>
          <Box padding={2}>
            <input
              type="file"
              multiple
              name="images"
              onChange={(e) => setValue("images", e.target.files)}
            />
          </Box>
          <Box padding={2}>
            <Button type="submit" variant="secondary">
              Add to do
            </Button>
          </Box>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </form>
    </ModalLayout>
  );
};

export default Modal;
