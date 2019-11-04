module.exports = require('knex')({
    client: 'mysql',
    connection: {
        host     : 'localhost',
        user     : 'root',
        password : '123',
        database : 'user'
    }
});
