$(function(){
  //日曜日を休業日に設定-----------------------------
  $('#schedule-container .sunday table').replaceWith('休<br>業<br>日');

  //予約状況を◎と×で表示-----------------------------
  for(let i=1; i<8; i++){
    for(let j=0; j<17; j++){
      var reserve = $('#schedule-container .reserveTable' + i + ' td').eq(j);
      //予約可能
      if(reserve.text() == 0){
        reserve.text('◎');
        reserve.addClass('reservable');
      //予約不可能
      } else if(reserve.text() == 1){
        reserve.text('×');
        reserve.addClass('unreservable');
      } 
    }
    //一番下のセルにクラス追加
    $('#schedule-container .reserveTable' + i + ' td').eq(16).addClass('lastCell')
  }
  //空白時間
  $('#schedule-container .emptyCell').text('　');

  //土曜日と水曜日の午後に休業設定-----------------------------
  for(let i=8; i<17; i++){
    var saturdayPM = $('#schedule-container .saturday td').eq(i);
    saturdayPM.addClass('close');
    var wednesdayPM = $('#schedule-container .wednesday td').eq(i);
    wednesdayPM.addClass('close');
  }
  $('#schedule-container .close').text('－');

  
  
  
  
  
});