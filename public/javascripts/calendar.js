

//年、月の取得---------------------
const date = new Date();
var year = date.getYear();
if(year < 1900){
  year += 1900;
}
const mon = date.getMonth()+1;
const day  = date.getDay();
//表示文字列
monthStr = year + "年" + mon + "月"
//HTMLに表示
month = document.getElementById('month');
month.innerHTML = monthStr;

//日曜日を取得---------------------------
var sundayPos; //日曜日の場所
var saturdayPos; //土曜日の場所
var wednesdayPos; //水曜日の場所
var timeCellPos = 1; //時間帯のセルの分ずらす
/*各数字は曜日配列番号に対応*/
console.log(Number(day));
sundayPos = Number(day) + timeCellPos;

saturdayPos = 6 - Number(day) + timeCellPos;
wednesdayPos = 3 - Number(day) + timeCellPos;
if(wednesdayPos < 0){
  wednesdayPos = 6 + wednesdayPos + timeCellPos;
}
const scheduleContainer = document.getElementById('schedule-container');
const sundayCell = scheduleContainer.children[sundayPos];
const saturdayCell = scheduleContainer.children[saturdayPos];
const wednesdayCell = scheduleContainer.children[wednesdayPos];

sundayCell.classList.add('sunday');
saturdayCell.classList.add('saturday');
wednesdayCell.classList.add('wednesday');

//予約テーブルにクラス追加
for(let i=1; i<8; i++){
  scheduleContainer.children[i].classList.add('reserveTable'+i);;
}



//7日間の曜日取得---------------------
const dayOfWeekArray = [ "日", "月", "火", "水", "木", "金", "土" ]
function getAfterDate(afterDay) {
  let date = new Date();
  date.setDate(date.getDate() + afterDay);
  let day  = date.getDate();
  const dayOfWeek = dayOfWeekArray[date.getDay()];
  todayStr
   = day + "日" + "（" + dayOfWeek + "）"; 
  return todayStr; 
}
//HTMLに表示
var weekArray = []
for(let i=0; i<7; i++){
  weekArray.push(document.getElementById('today+' + i));
  weekArray[i].innerHTML =getAfterDate(i);
}

$(function(){
  $('.day7 td').eq(saturdayPos - timeCellPos).addClass('saturday');
  $('.day7 td').eq(sundayPos - timeCellPos).addClass('sunday')
});