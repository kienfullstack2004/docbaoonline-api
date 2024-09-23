const Auth = require("./Auth")

const router = (app) => {
    app.use('/api/v1',Auth);
    app.use('/',(req,res,next)=>{
        res.send('<h1>Chào mừng bạn đến với trang website của chúng tôi</h1>')
    })
}

module.exports = router;