// Counter value-varialbe အသစ်ကြေညာခြင်း နှင့် တန်ဖိုးသတ်မှတ်ခြင်း
var count = 0;

// HTML မှ ID များ - ခလုတ်နှစ်ခုနှင့် စာသားပြသမည့် နေရာ- တို့ကို ချိတ်ပေးခြင်း
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// ပြောင်းလဲသမျှစာသားများကို အချိန်နှင့် တစ်ပြေးညီ ပြောင်းလဲပြစေခြင်း
function setCounterText() {
  countEl.textContent = count;
}
// increment - ခလုတ်ကို event listener,event handler နှင့် တွဲချိတ်ပေးခြင်း
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// decrement ခလုတ်ကို event listener,event handlar  နှင့် တွဲချိတ်ပေးခြင်း
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});
