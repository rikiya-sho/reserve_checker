/*
7日後〜13日後まで（下のテーブル）の設定
calendar.js, table_view.js を流用
*/

$(function(){

  const scheduleContainer = document.getElementById('schedule-container2');

  //年、月の取得（7日後）---------------------
  const date = new Date();
  date.setDate(date.getDate() + 7);
  var year = date.getFullYear();
  const mon = date.getMonth()+1;
  const day  = date.getDay();
  //表示文字列
  monthStr = year + "年" + mon + "月"
  //HTMLに表示
  month2 = document.getElementById('month2');
  month2.innerHTML = monthStr;

  //日曜日を取得---------------------------
  var sundayPos; //日曜日の場所
  var saturdayPos; //土曜日の場所
  var wednesdayPos; //水曜日の場所
  var timeCellPos = 1; //時間帯のセルの分ずらす
  /*各数字は曜日配列番号に対応*/
  sundayPos = 7 - Number(day) + timeCellPos;
  if(sundayPos == 8){
    sundayPos = 0 + timeCellPos;
  }
  saturdayPos = 6 - Number(day) + timeCellPos;
  wednesdayPos = 3 - Number(day) + timeCellPos;
  if(wednesdayPos < 0){
    wednesdayPos = 6 + wednesdayPos + timeCellPos;
  }

  const sundayCell = scheduleContainer.children[sundayPos];
  const saturdayCell = scheduleContainer.children[saturdayPos];
  const wednesdayCell = scheduleContainer.children[wednesdayPos];

  sundayCell.classList.add('sunday');
  saturdayCell.classList.add('saturday');
  wednesdayCell.classList.add('wednesday');


  //7日間の曜日取得---------------------
  const dayOfWeekArray = [ "日", "月", "火", "水", "木", "金", "土" ]
  function getAfterDate(afterDay) {
    let date = new Date();
    date.setDate(date.getDate() + afterDay);
    let day  = date.getDate();
    const dayOfWeek = dayOfWeekArray[date.getDay()];
    todayStr = day + "日" + "（" + dayOfWeek + "）"; 
    return todayStr; 
  }
  //HTMLに表示
  var weekArray = []
  for(let i=7; i<14; i++){
    weekArray.push(document.getElementById('today+' + i));
    weekArray[i - 7].innerHTML =getAfterDate(i);
  }

  //予約テーブルにクラス追加
  for(let i=1; i<8; i++){
    scheduleContainer.children[i].classList.add('reserveTable'+i);;
  }

  //日曜日を休業日に設定（7日後）-----------------------------
  $('#schedule-container2 .sunday table').replaceWith('休<br>業<br>日');

  //予約状況を◎と×で表示（7日後）-----------------------------
  for(let i=1; i<8; i++){
    for(let j=0; j<17; j++){
      var reserve2 = $('#schedule-container2 .reserveTable' + i + ' td').eq(j);
      var reserve_status2 = $('#schedule-container2 .reserveTable' + i + ' td' + ' .status').eq(j);
      //予約可能
      if(reserve_status2.text() == 0){
        reserve_status2.text('◎');
        reserve2.addClass('reservable');
      //予約不可能
      } else if(reserve_status2.text() == 1){
        reserve_status2.text('×');
        reserve2.addClass('unreservable');
      } 
    }
    //一番下のセルにクラス追加
    $('#schedule-container2 .reserveTable' + i + ' td').eq(16).addClass('lastCell')
  }
  //空白時間
  $('#schedule-container2 .emptyCell').text('　');

  //土曜日と水曜日の午後に休業設定（7日後）-----------------------------
  for(let i=8; i<17; i++){
    var saturdayPM = $('#schedule-container2 .saturday td').eq(i);
    saturdayPM.addClass('close');
    var wednesdayPM = $('#schedule-container2 .wednesday td').eq(i);
    wednesdayPM.addClass('close');
  }
  $('#schedule-container2 .close').text('－');
  
  $('.day7 td').eq(saturdayPos - timeCellPos + 7).addClass('saturday');
  $('.day7 td').eq(sundayPos - timeCellPos + 7).addClass('sunday')
});


//スクロール位置をフォーム送信---------------------------
$(function(){
  $('button').mousedown(function(){
    $('.scroll').attr('value', $(window).scrollTop());
  });
})
//パラメーターからスクロール位置を取得して設定
$(function(){
  var yPos = getParam('y');
  $(window).scrollTop(yPos);
});

/**
 * Get the URL parameter value
 * URLのパラメーター取得
 *
 * @param  name {string} パラメータのキー文字列
 * @return  url {url} 対象のURL文字列（任意）
 */
function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

