const db = require('./database');
(async () => {
    let json1 = await db.User.findOne({username:'test'});
    console.log(json1);
})();
