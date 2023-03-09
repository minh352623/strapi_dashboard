/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import {
  Avatar,
  BaseCheckbox,
  BaseHeaderLayout,
  Box,
  Button,
  ContentLayout,
  Flex,
  HeaderLayout,
  IconButton,
  Table,
  Tbody,
  Td,
  TFooter,
  Th,
  Thead,
  Tr,
  Typography,
  VisuallyHidden,
} from "@strapi/design-system";
import { Link } from "react-router-dom";
import { ArrowLeft, Cross, Pencil, Plus, Trash } from "@strapi/icons";
import { EmptyStateLayout } from "@strapi/design-system";
import Modal from "../../components/modal";
import todoRequest from "../../api/todo";
const HomePage = () => {
  const [todeData, setTodoData] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchTodos = async () => {
    try {
      const todos = await todoRequest.getAllTodo();
      console.log(todos);
      // setTodoData(todos);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(async () => {
    await fetchTodos();
  }, []);
  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        navigationAction={
          <Link startIcon={<ArrowLeft />} to="/">
            Go back
          </Link>
        }
        primaryAction={
          <Button onClick={() => setShowModel(true)} startIcon={<Plus />}>
            Add an todo
          </Button>
        }
        secondaryAction={
          <Button variant="tertiary" startIcon={<Pencil />}>
            Edit
          </Button>
        }
        title="Todo"
        subtitle="36 entries found"
        as="h2"
      />

      <ContentLayout>
        {todeData.length === 0 ? (
          <Box padding={8} background="neutral100">
            <EmptyStateLayout
              icon={
                <Cross
                  onClick={() => {
                    console.log("asdasd0");
                  }}
                />
              }
              content="You don't have any content yet..."
              action={
                <Button
                  onClick={() => setShowModel(true)}
                  variant="secondary"
                  startIcon={<Plus />}
                >
                  Create your first content-type
                </Button>
              }
            />
          </Box>
        ) : (
          <Box padding={8} background="neutral100">
            <Table
              footer={
                <TFooter icon={<Plus />}>
                  Add another field to this collection type
                </TFooter>
              }
            >
              <Thead>
                <Tr>
                  <Th>
                    <BaseCheckbox aria-label="Select all entries" />
                  </Th>

                  <Th>
                    <Typography variant="sigma">Name</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Description</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Categories</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Contact</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Action</Typography>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {todeData.map((todo) => (
                  <Tr key={todo.id}>
                    <Td>
                      <BaseCheckbox aria-label={`Select ${todo.name}`} />
                    </Td>

                    <Td>
                      <Avatar src={todo.contact} alt={todo.contact} />
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        {todo.description}
                      </Typography>
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        {todo.category}
                      </Typography>
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        {todo.contact}
                      </Typography>
                    </Td>
                    <Td>
                      <Flex>
                        <a
                          href="https://www.google.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          G
                        </a>
                        <IconButton
                          onClick={() => console.log("edit")}
                          label="Edit"
                          noBorder
                          icon={<Pencil />}
                        />
                        <Box paddingLeft={1}>
                          <IconButton
                            onClick={() => console.log("delete")}
                            label="Delete"
                            noBorder
                            icon={<Trash />}
                          />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}
      </ContentLayout>
      {showModel && (
        <Modal
          handleChangeShow={setShowModel}
          hanldeAddTodo={setTodoData}
        ></Modal>
      )}
    </Box>
  );
};

export default HomePage;
