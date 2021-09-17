import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routers/userRouter";
import userAuth from "./lib/userAuth";

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

const handleListening = () => {
  console.log(`서버 실행 : http://localhost:${PORT}`);
};

app.use("/api/v1/user", userRouter);
app.use("/uploads", express.static("uploads"));

app.listen(process.env.PORT, handleListening);
