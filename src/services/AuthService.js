const db = require("../models/index")

class AuthService {
  getAllRole = () => new Promise(async(resolve,reject)=> {
     try {
        const response = await db.Roles.findAll({})
        resolve({
            err:response ? 0 : 1,
            msg: response ? 'Get is successfully!' : 'Get is faild!',
            data: response ? response : {}
        })
     } catch (error) {
        return reject(error)
     }
  }) 
}

module.exports = new AuthService();