/*
祝日設定用
*/

$(function(){
  //2020年の祝日配列（*毎年更新箇所）
  var holidayArray = [
    '2020-07-23', '2020-07-24', '2020-08-10', '2020-09-21', '2020-09-22', 
    '2020-11-03', '2020-11-23'
  ];

  //formタグの日付と祝日配列を評価し祝日ならクラスを追加
  var formArray = document.getElementsByTagName('form');
  for(let i=0; i<formArray.length; i++){
    var formName = formArray[i].name;
    for(let j=0; j<holidayArray.length; j++){
      if(formName == holidayArray[j]){
        formArray[i].parentNode.classList.add('holiday');
      }
    }
  }
  //tableと文字列を置換
  $('.holiday table').replaceWith('休<br>業<br>日');

})