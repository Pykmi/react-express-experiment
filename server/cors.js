// CORS middleware
function cors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, DELETE, PATCH, POST, PUT");
    return res.status(200).json({});
  }

  next();
}

module.exports = cors;
