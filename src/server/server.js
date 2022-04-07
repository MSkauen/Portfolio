const app = require("./app.js");

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Started server on http://localhost:" + port);
});
