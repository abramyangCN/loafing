import React from 'react';

import './App.css';

const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

const date = new Date().getDate();
const month = new Date().getMonth() + 1;
const day = new Date().getDay();
const weekDay = week[new Date().getDay()];
const today = `${month}月${date}日`;

const qingming = new Date('2022/04/05 00:00:00');
const labor = new Date('2022/05/01 00:00:00');
const dragonBoat = new Date('2022/06/03 00:00:00');
const midAutumn = new Date('2022/09/10 00:00:00');
const chineseNational = new Date('2022/10/01 00:00:00');
const newYear = new Date('2023/01/01 00:00:00');
const lunarNewYear = new Date('2023/01/22 00:00:00');

const qingmingTime = getInterval(qingming);
const laborTime = getInterval(labor);
const dragonBoatTime = getInterval(dragonBoat);
const midAutumnTime = getInterval(midAutumn);
const chineseNationalTime = getInterval(chineseNational);
const newYearTime = getInterval(newYear);
const lunarNewYearTime = getInterval(lunarNewYear);

function getInterval(end, start = new Date()) {
  const interval = (end.getTime() - start.getTime()) / 1000;
  const day = parseInt(interval / 60 / 60 / 24);
  const hour = parseInt((interval / 60 / 60) % 24);
  const minute = parseInt((interval / 60) % 60);
  const second = parseInt(interval % 60);
  return {
    day: day,
    hour: hour,
    minute: minute,
    second: second,
  };
}

function weekNotice() {
  if ([day].includes('0', '6')) {
    return (
      <>
        <p>今天是{weekDay}，周末愉快！</p>;
      </>
    );
  }
  if ([day].includes('5')) {
    return (
      <>
        <p>今天是{weekDay}，TGIF！</p>
      </>
    );
  }
  if ([day].includes('1')) {
    return (
      <>
        <p>今天是{weekDay}，期待吧！一周才刚刚开始呢！</p>
      </>
    );
  }
  return (
    <>
      <p>
        {weekDay}了，过去{day === 3 ? `一半` : `${day}天`}
        了， 距离周六还有 {6 - day} 天。
      </p>
    </>
  );
}

function greeting() {
  const hour = new Date().getHours();
  if (hour < 6) {
    return '早上好！';
  }
  if (hour < 12) {
    return '上午好！';
  }
  if (hour < 14) {
    return '中午好！';
  }
  if (hour < 18) {
    return '下午好！';
  }
  if (hour < 24) {
    return '晚上好！';
  }
}

function App() {
  return (
    <div className='App'>
      <div>
        <p>
          {today} {greeting()}，摸鱼人！今天也一定不要忘记摸鱼哦！ 有事没事起身去茶水间，去厕所，去廊道走走。 别老在工位上坐着，钱是老板的，但命是自己的。
        </p>
        {weekNotice()}
        {qingmingTime.second > 0 ? <p>距离【清明】假期还有{qingmingTime.day}天。</p> : null}
        {laborTime.second > 0 ? <p>距离【五一】假期还有{laborTime.day}天。</p> : null}
        {dragonBoatTime.second > 0 ? <p>距离【端午】假期还有{dragonBoatTime.day}天。</p> : null}
        {midAutumnTime.second > 0 ? <p>距离【中秋】假期还有{midAutumnTime.day}天。</p> : null}
        {chineseNationalTime.second > 0 ? <p>距离【国庆】假期还有{chineseNationalTime.day}天。</p> : null}
        {newYearTime.second > 0 ? <p>距离【元旦】假期还有{newYearTime.day}天。</p> : null}
        {lunarNewYearTime.second > 0 ? <p>距离【春节】假期还有{lunarNewYearTime.day}天。</p> : null}

        <p>认认真真上班，这根本就不叫赚钱， 那是用劳动换取报酬。只有偷懒，在上班的时候摸鱼划水，你才是从老板手里赚到了钱。</p>
        <p>最后，祝愿天下所有摸鱼人，都能愉快的渡过每一天！</p>
      </div>
    </div>
  );
}

export default App;
