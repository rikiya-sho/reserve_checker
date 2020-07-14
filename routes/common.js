/*
共通関数
*/

module.exports = {
  /**------------------------------------------------
   * 年月日を取得
   * @param  afterDay {number} 今日から何日後
   * @return  today {string} 年月日の文字列
   */
  getAfterDate : 
  function getAfterDate(afterDay) {
    var date = new Date();
    date.setDate(date.getDate() + afterDay);
    var year  = date.getFullYear();
    var month = ("0"+(date.getMonth() + 1)).slice(-2);
    var day   = ("0"+date.getDate()).slice(-2);
    var today = year + "-" + month + "-" + day;
    return today; 
  },
   /**------------------------------------------------
   * URLハッシュ用のランダム値
   * @return  hashNum {number} ランダム数
   */
  randomNum : 
  function (){
    var hashNum = Math.floor(Math.random() * 1000000);
    return hashNum;
  }
};