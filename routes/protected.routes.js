const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { Error } = require("mongoose");
const session = require("express-session");

router.get("/main", (req, res, next) => {
  res.render("protected/main");
});

router.get("/private", (req, res, next) => {
    res.render("protected/private");
  });

// router.post("/login", async (req, res, next) => {
//   console.log("Session", req.session);
//   const { email, password } = req.body;
//   if (email === "" || password === "") {
//     res.render("auth/signup", { errorMessage: "All the fields are mandatory" });
//   } else {
//     // try {
//     //   const userFromDB = await User.find({ email });
//     //   console.log(userFromDB);
//     // } catch (err) {
//     //   next(err);
//     // }
//     // findOne will return the first match against your query from the DB
//     User.find({ email })
//       .then((userArrFromDB) => {
//         //  no user with such email -> show error
//         // email matches something => [{ email: dasdas, pass: dsda }]
//         // doesn't match => []
//         if (userArrFromDB.length === 0) {
//           res.render("auth/login", {
//             errorMessage: "User does not exist in the DB",
//           });
//         } else {
//           // check if password is correct
//           const passwordMatch = bcrypt.compareSync(
//             password,
//             userArrFromDB[0].password
//           );
//           if (!passwordMatch) {
//             res.render("auth/login", {
//               errorMessage: "Auth does not match",
//             });
//           } else {
//             // find user redirect to profile
//             res.render("profile");
//           }
//         }
//       })
//       .catch((err) => next(err));
//   }
// });

module.exports = router;
