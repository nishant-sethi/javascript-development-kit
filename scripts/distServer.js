import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static("dist"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../dist/index.html"))
);
app.get("/users", (req, res) => {
  res.json([
    { id: 1, firstName: "xyz", lastName: "xyz", email: "xyz" },
    { id: 2, firstName: "xyz", lastName: "xyz", email: "xyz" },
    { id: 3, firstName: "xyz", lastName: "xyz", email: "xyz" },
  ]);
});
app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } else {
    open(`http://localhost:+${port}`);
  }
});
