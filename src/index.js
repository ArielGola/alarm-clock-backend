// Global envrioments
require('dotenv').config();

// App file
const app = require('./app');

// Database
require('./database');

// Serve
async function main() {
    await app.listen(app.get('port'));
    console.log("Server on port", app.get('port'));
};

main();