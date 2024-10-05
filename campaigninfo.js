var mysql = require("mysql")

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root@987",
    database:"campaigninfo"
});

con.connect(function(error){
    if(error) throw error;
    console.log("Connected to CampaignInfo Database...");

    con.query("select * from campaigns",function(error,result){
        if(error) throw error;
        console.log(result);
    });

});