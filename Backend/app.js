import express from "express";
// import cors from "cors";
import { Client, Account, ID } from "appwrite";
import bodyParser from "body-parser";
import "dotenv/config"
const PORT = 3001;
const app = express();
// dotenv.config();

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.PROJECT_ID);

const account = new Account(client);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());

app.post("/auth/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    account.create(
        ID.unique(),
        email,
        password,
    ).then(response => {
        res.json({
            msg: "User created Successfully"
        })
    }, error => {
        res.json({
            msg: {
                msg: "Error while creating the user",
                error: error.response.message,
            }
        });
    });
})

app.post("/auth/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const promise = account.createEmailSession(email, password);

    promise.then(function (response) {
        res.json({
            msg: "Verified",
        })
    }, function (error) {
        res.json({
            msg: "Username or password is incorrect"
        })
    });
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
})