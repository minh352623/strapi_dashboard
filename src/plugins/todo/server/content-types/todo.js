"use-strict";

module.exports = {
  schema: {
    kind: "collectionType",
    collectionName: "todos",
    info: {
      singularName: "todo",
      pluralName: "todos",
      displayName: "Todo",
    },
    options: {
      draftAndPublish: false,
      comment: "",
    },
    attributes: {
      name_todo: {
        type: "text",
      },
      image: {
        type: "media",
        multiple: false,
        allowedTypes: ["images", "files", "videos", "audios"],
      },
      images: {
        type: "media",
        multiple: true,
        allowedTypes: ["images", "files", "videos", "audios"],
      },
      description: {
        type: "text",
      },
    },
  },
};
