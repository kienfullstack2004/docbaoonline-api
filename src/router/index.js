const Auth = require("./Auth")

const router = (app) => {
    app.use('/api/v1',Auth);
}

module.exports = router;