
function handleTickInit(tick) {
  //表記の指定
  var locale = {
    DAY_PLURAL: '日',
    HOUR_PLURAL: '時',
    MINUTE_PLURAL: '分',
    SECOND_PLURAL: '秒',
  };
  for (var key in locale) {
    if (!locale.hasOwnProperty(key)) { continue; }
    tick.setConstant(key, locale[key]);
  }  
  //終了日の指定
  var counter = Tick.count.down('2025-02-24T10:00:00+01:00');
  counter.onupdate = function(value) {
    tick.value = value;
  };
}
