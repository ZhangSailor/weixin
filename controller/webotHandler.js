var webot = require('weixin-robot');

module.exports = function(app){
  webot.watch(app,{token:'nanlovexing',path:'/weixin'});
  
  
  
  webot.set('subscribe',{
    pattern:function(info){
      return info.is('event') && info.param.event ==='subscribe';
    },
    handler:function(info){
      return "欢迎订阅午夜鬼故事，平台建设中，很快会与大家见面的！";
    }
  });
  
  webot.set('hi','你好呀你好呀');
  webot.set('dlwebs',[{'title':'大连聚优客微信建设平台','url':'http://www.dlwebs.com/index.html','picUrl':'http://www.dlwebs.com/images/f34.png','description':'description'}]);
  
  webot.set('*',{
    pattern:/./,
    handler:function(info){
      return "您发送的<" + info.text +">已经收到，稍后推出关键字查询鬼故事！敬请期待哦！";
    }
  });
};