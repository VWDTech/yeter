const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URL)

.then(() => {
    console.log("Veritabanı ile olan bağlantı başarılı.")
})

.catch((err) => {
    console.log(err)
})

module.exports = mongoose