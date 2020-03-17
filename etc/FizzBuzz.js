/*
  문제 풀이
  1부터 100까지의 숫자 중, 3의배수일때는 Fizz, 5의 배수일때는 Buzz를 출력한다.
  3의배수도 아니고 5의 배수도 아닌 경우에는 숫자를 출력한다.
 */
function solution() {
  for(let i=1; i<=100; i++) {
    let fizzFlag = false;
    let buzzFlag = false;
    if(i % 3 === 0) {
      fizzFlag = true;
      console.log('Fizz');
    }
    if(i % 5 === 0) {
      buzzFlag = true;
      console.log('Buzz');
    }
    if(!fizzFlag && !buzzFlag) {
      console.log(i);
    }
  }
}