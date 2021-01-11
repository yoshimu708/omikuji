'user strict';

{
  const btn= document.getElementById('btn');
  const result= document.getElementById('omikuji');
  const explain= document.getElementById('explain');


  btn.addEventListener('click',()=>{
    const results=['大吉','中吉','小吉','凶'];
    const explains=['何をやってもうまくいく！最高の一日になるでしょう','可もなく不可もないですね。何も起こらない人生を変えるのはあなただ！','運が少し悪そうです。ポジティブに考えると全て今日は運勢のせいにしてしまえ！','運はめっちゃ悪い。でも諦めるな！負けんな！元気を出せ！（笑）'];
    const n = Math.floor(Math.random()* results.length);

    result.textContent = results[n];
    explain.textContent = explains[n];
    result.style.display="block";
    explain.style.display="block";
  },false);
}