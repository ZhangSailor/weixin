var auth = require('../controller/auth');
var webot = require('weixin-robot');

module.exports = {
  index:function(req,res){
    if(auth.CheckSignature(req.query.signature,req.query.timestamp,req.query.nonce))
        res.send(req.query.echostr);
    else
        res.send("Bad Token!");
  },
  message:function(req,res){
    
    //console.log(req.body);
  }
};