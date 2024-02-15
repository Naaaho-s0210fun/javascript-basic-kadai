//変数numに1～99のランダムな整数を代入する
num = Math.floor(Math.random() * 100);

//変数numが3の倍数かの判定
if (num % 3 === 0) {
  console.log('3の倍数です');
}

//変数numが5の倍数かの判定
if (num % 5 === 0) {
  console.log('5の倍数です');
}

//変数numが3と5の倍数かの判定
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です')
}

//3と5の倍数の条件が成り立たないとき
else {
  console.log(num);
}


