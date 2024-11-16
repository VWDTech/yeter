const password = require("../models/passwords.model")

const passwords = async (req, res) => {
    try{
        const passSave = new password(req.body)
        await passSave.save()
        res.send("İşlem Başarılı")
    }
    catch(err){
        res.send(err)
    }

}

module.exports = {
    passwords
}