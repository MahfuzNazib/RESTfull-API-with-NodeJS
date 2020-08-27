const db = require('./db');

module.exports = {

    // Store Product Info
    storeProduct : function(productInfo, callback){
        var sql = "INSERT INTO products VALUES(?,?,?)";
        db.execute(sql, [null,productInfo.name, productInfo.price], function(status){
            if(status){
                callback(true)
            }
            else{
                callback(false)
            }
        })
    }, 

    // get Product info by ProductID
    getProductInfo : function(productId, callback){
        var sql = "SELECT * FROM products WHERE ProductId = ?";
        db.getResults(sql, [productId], function(results){
            if(results){
                callback(results);
            }
            else{
                callback(null)
            }
        })
    },

    //get All Products
    products : function(callback){
        var sql = "SELECT * FROM products";
        db.getResults(sql, null, function(results){
            if(results){
                callback(results)
            }
            else{
                callback(null)
            }
        })
    },

    //DELETE product 
    destroyProduct : function(productId, callback){
        var sql = "DELETE FROM products WHERE productId = ?";
        db.execute(sql,[productId], function(status){
            if(status){
                callback(true)
            }
            else{
                callback(false)
            }
        })
    },

    //UPDATE product
    updateProduct : function(Id,productInfo, callback){
        var sql = "UPDATE products SET productName = ?, productPrice = ? WHERE productId = ?";
        db.execute(sql, [productInfo.productName, productInfo.productPrice, Id], function(status){
            if(status){
                callback(true)
            }
            else{
                callback(false)
            }
        })
    },
}