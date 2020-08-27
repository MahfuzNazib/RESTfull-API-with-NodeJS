const db = require('./db');

module.exports = {
    //create New User
    createUser : function(userInfo, callback){
        var sql = "INSERT INTO users VALUES (?,?,?,?)";
        db.execute(sql, [null, userInfo.userName, userInfo.email, userInfo.password], function(status){
            if(status){
                callback(true)
            }
            else{     
                callback(false)
            }    
        })
    },
}