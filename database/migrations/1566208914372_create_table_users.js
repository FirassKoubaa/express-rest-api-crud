module.exports = {
    "up": "CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, UNIQUE KEY id (id), firstname VARCHAR (255) NOT NULL, lastname VARCHAR (255) NOT NULL, username VARCHAR (255) NOT NULL, password VARCHAR (255) NOT NULL, mobile VARCHAR (255) NOT NULL, created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)",
    "down": "TRUNCATE TABLE  users"
}