import { readFile, writeFile } from 'node:fs/promises';
import express from "express";
import { BACKEND_IP } from './ip.js';

const app = express();

const LISTEN_PORT = 3000;
const DATA_FILE = "./data.json";

async function getData() {
  const contents = await readFile(DATA_FILE, {encoding: "utf-8"});
  return JSON.parse(contents);
}

async function setData(data) {
  await writeFile(DATA_FILE, JSON.stringify(data));
}

app.use(express.json());

app.get("/data", async (req, res) => {
  res.send(await getData());
})

app.post("/data", async (req, res) => {
  await setData({text: req.body.text})

  // How this line could be improved is left as an exercise to the workshopper
  res.send({success: true});
})

app.listen(LISTEN_PORT, () => {
  console.log(`API listening at http://${BACKEND_IP}:${LISTEN_PORT}`);
})
