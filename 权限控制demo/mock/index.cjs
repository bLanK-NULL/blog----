const express = require("express");
const app = express();
const cors = require("cors")
const vipLogin = require("./data/vip_login.json");
const adminLogin = require("./data/admin_login.json");
const adminPermission = require('./data/admin_permission.json')
const vipPermission = require('./data/vip_permission.json')


app.use(cors())
app.use(express.urlencoded({ extended: true })); //apipost
app.use(express.json()) //axios


app.post("/api/login", (req, res) => {
  const user = req.body.user;
  if (user === "admin") {
    res.send(adminLogin);
  } else if (user === "vip") {
    res.send(vipLogin);
  } else {
    res.send('none character')
  }
});
app.post('/api/permission', (req, res) => {
  const user = req.body.user;
  if (user === 'admin') {
    res.send(adminPermission)
  } else if (user === 'vip')
    res.send(vipPermission)
  else res.send('none character')
})


app.listen(3300, () => {
  console.log("serve in 3300");
});
