import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routers/userRouter";
import userAuth from "./lib/userAuth";
import { Server } from "socket.io";
import { fs } from 'fs';

//익스프레스 시용
const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//미들웨어
app.use(userAuth);

//DB실행
mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB 실행"))
  .catch((err) => console.log(err));

app.use("/api/v1/user", userRouter);
app.use("/uploads", express.static("uploads"));

//socket io (구현중)
const http = require("http");
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    //cors 오류 해결
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

server.listen(PORT, () => {
  let dir = "./uploads";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  console.log(`connect ✅ http://localhost:${PORT}`);
});

app.get("/", function (req, res, next) {
  res.json("hi");
});

io.on("connection", (socket) => {
  socket.on("newUser", (data) => {
    //입장시
    io.emit("enter", data);
    console.log("입장");
  });

  socket.on("message", (data) => {
    //메세지 올시
    console.log("client가 보낸 데이터: ", data);
    io.emit("upload", data);
    console.log(data);
  });

  socket.on("disconnect", (nick) => {
    //퇴장시
    io.emit("out", nick);
    console.log("퇴장");
  });
});
