const userModel = require("./users-model");
function validatePayload(req, res, next) {
  try {
    let { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: "Alanları kontrol ediniz." });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

function validateLogin(req, res, next) {
  try {
    let foundUser = userModel.findUser(req.body.username, req.body.password);
    if (!foundUser) {
      res.status(404).json({ message: "User not found." });
    } else {
      req.foundUser = foundUser;
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { validateLogin, validatePayload };
