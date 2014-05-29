var crypto = require('crypto');

module.exports= {
  CheckSignature:function(signature,timestamp,nonce){
    var token = "nanlovexing";
    var tmpArr = [token,timestamp,nonce];
    tmpArr.sort();
    var tmpStr = tmpArr.join('');
    return sha1(tmpStr) === signature;
  }
};

function sha1(str){
  var md5sum = crypto.createHash('sha1');
  md5sum.update(str);
  str = md5sum.digest('hex');
  return str;
}