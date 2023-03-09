module.exports = {
  // ...
  todo: {
    enabled: true,
    resolve: "./src/plugins/todo",
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "dmeyrzzjp",
        api_key: "771653958759227",
        api_secret: "067DNV9CxseRudl-ofGlCKNnFTY",
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
};
