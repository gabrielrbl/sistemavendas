const http = require("http");
const { api } = require("./config.json");
const { app } = require("./src/app");

const server = http.createServer(app);
const PORT = api.port;

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})