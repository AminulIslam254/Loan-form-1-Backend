const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


const { connectMongoose, User } = require("./Database/Connectdb.js");

connectMongoose();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is home page");
})

app.post('/', (req, res) => {
  res.send('Hello World!');
})


app.get("/register", (req, res) => {
  res.send("This is registe2");
})



app.post("/register", (req, res) => {
  const { first_name, last_name, phone_no, age, applicants_business_name, GST_no, address, business_id, loan_amount, interest_rate, loan_tenure } = req.body;
  User.findOne({"first_name":first_name}, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" })
    } else {
      const user = new User({
        first_name,
        last_name,
        phone_no,
        age,
        applicants_business_name,
        GST_no,
        address,
        business_id,
        loan_amount,
        interest_rate,
        loan_tenure
      })
      user.save(err => {
        if (err) {
          console.log("This is error lol")
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      })
    }
  })

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
