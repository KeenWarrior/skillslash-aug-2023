function auth(req, res, next) {
  console.log(req.headers);
  if (req.headers.authorization) {
    const [type, token] = req.headers.authorization.split(" ");
    if (type === "Basic") {
      const [username, password] = Buffer.from(token, "base64")
        .toString()
        .split(":");
      if (username === "admin" && password === "admin") {
        next();
      } else {
        res.status(401).send({ message: "Unauthorized" });
      }
    }
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
}

module.exports = auth;
