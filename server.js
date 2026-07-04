// Tintero — servidor del taller compartido
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json({ limit: "20mb" }));
app.use(express.static(path.join(__dirname, "public")));

const DIR = path.join(__dirname, "datos");
fs.mkdirSync(DIR, { recursive: true });
const archivo = (sala) => path.join(DIR, String(sala).replace(/[^a-z0-9_-]/gi, "_").slice(0, 60) + ".json");
const leer = (sala) => { try { return JSON.parse(fs.readFileSync(archivo(sala), "utf8")); } catch { return {}; } };
const escribir = (sala, obj) => fs.writeFileSync(archivo(sala), JSON.stringify(obj));

// leer un valor
app.get("/api/kv/:sala/:clave", (req, res) => {
  const d = leer(req.params.sala);
  const e = d[req.params.clave];
  if (!e) return res.status(404).json({ error: "no existe" });
  res.json(e);
});

// escribir un valor
app.put("/api/kv/:sala/:clave", (req, res) => {
  const d = leer(req.params.sala);
  const previo = d[req.params.clave];
  const version = ((previo && previo.version) || 0) + 1;
  d[req.params.clave] = { value: String(req.body.value ?? ""), version, editor: String(req.body.autor || "?"), ts: Date.now() };
  escribir(req.params.sala, d);
  res.json({ version });
});

// copia de seguridad de toda la sala
app.get("/api/copia/:sala", (req, res) => {
  res.setHeader("Content-Disposition", `attachment; filename="tintero-copia-${req.params.sala}.json"`);
  res.json(leer(req.params.sala));
});

// restaurar una copia
app.put("/api/restaurar/:sala", (req, res) => {
  escribir(req.params.sala, req.body || {});
  res.json({ ok: true });
});

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => console.log("Tintero escuchando en el puerto", puerto));
