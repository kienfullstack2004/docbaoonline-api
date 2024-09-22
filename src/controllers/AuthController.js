const services = require('../services/AuthService');
class Auth {
   getAllRoles = async (req, res, next) => {
    try {
      const response = await services.getAllRole();
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({
        err: 500,
        msg: 'Interal Server Error'
      })
    }
  }

}

module.exports = new Auth();