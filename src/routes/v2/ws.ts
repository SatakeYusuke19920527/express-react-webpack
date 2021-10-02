import { randomInt } from "crypto";
import express from "express";
import http from "http";
import socketIo from 'socket.io'

const router = express.Router();

const app: express.Express = express();
const server: http.Server = http.createServer(app);
const io: socketIo.Server = new socketIo.Server(server);

io.on("connection", (socket: socketIo.Socket) => {
    socket.on("FromAPI", () => {
        io.emit("FromAPI", "===========HELLO WORLD===========");
    });
});

export default router