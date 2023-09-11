const app = require("./app");
const port = process.env.PORT || 5000;
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`error:${err.message}`);
  console.log("sutting down the server due to unhandled promis rejection.");
  server.close(() => {
    process.exit(1);
  });
});
