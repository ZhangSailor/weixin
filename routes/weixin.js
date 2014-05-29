var auth = require('../controller/auth');
module.exports = {
  index:function(req,res){
    if(auth.CheckSignature(req.query.signature,req.query.timestamp,req.query.nonce))
        res.send(req.query.echostr);
    else
        res.send("Bad Token!");
  }
};