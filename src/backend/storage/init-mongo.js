const dotenv = require('dotenv').config('../.env');

db.createUser({
    user: String(process.env.DB_USER),
    pwd: String(process.env.DB_USER_PASSWORD),
    roles: [
        {
            role: "readWrite",
            db: String(process.env.DB_NAME),
        }
    ]
})