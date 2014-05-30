var index = require('./index');
//var weixin = require('./weixin'),

module.exports = function(app){
  app.get('/',index.index);
  app.post('/',index.postindex);
  //app.get('/weixin',weixin.index);
  //app.post('/weixin',weixin.message);
};