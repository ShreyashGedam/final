const connect  = require("./db/connect")

const app = require("./index")

app.listen(5000, async () =>
{
    await connect()

    console.log("COnnecting to the sarver 5000")
} )