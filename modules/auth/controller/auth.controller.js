const AuthModel = require("../model/auth.model");
const jwt = require("jsonwebtoken");

generateToken = (user, callback) => {
  jwt.sign({ user }, "roshanSignature", (error, result) => {
    callback(error, result);
  });
};
userLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  AuthModel.selectUsers(email, password, (error, result) => {
    if (error == null || result) {
      generateToken(result, (error, token) => {
        if (!error) {
          res.send({
            token: token,
            mesg:"Login sucessfull"
          });
        }
      });
    } else {
      console.log(error);
    }
  });
};
userSignup = (req, res) => {
  const data = req.body;
  const keys = Object.keys(data).join(",");
  const values = Object.values(data).map(value => {
    return `'${value}'`;
  });
  const newValues = values.join(",");
  AuthModel.insertUser(keys, newValues, (error, result) => {
    res.send(result);
  });
};

module.exports = {
  userLogin,
  userSignup
};
