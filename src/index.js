import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ ok: true }));

app.listen(3000);