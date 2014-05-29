var path = require('path');
//exports.index = function(){
  
  //res.send('<xml> <ToUserName><![CDATA[toUser]]></ToUserName> <FromUserName><![CDATA[fromUser]]></FromUserName>  <CreateTime>20140526</CreateTime> <MsgType><![CDATA[text]]></MsgType> <Content><![CDATA[this is a test]]>Hi, I am Sailor.</Content> <MsgId>1234567890123456</MsgId> </xml>');
//}

module.exports = {
  index:function(req,res){
        res.send(req.query.echostr);
  },
  postindex:function(req,res){
     res.send(req.body.echoStr);
  }
};
