var index = require('./index');
module.exports = function(app){
  app.get('/',index.index);
  app.post('/',index.postindex);
};