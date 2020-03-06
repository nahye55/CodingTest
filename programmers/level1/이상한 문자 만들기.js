/*
  문제 설명
  문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

  제한 사항
  문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
  첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
  입출력 예
  s	return
  try hello world	TrY HeLlO WoRlD
  입출력 예 설명
  try hello world는 세 단어 try, hello, world로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 TrY, HeLlO, WoRlD입니다. 따라서 TrY HeLlO WoRlD 를 리턴합니다.
 */

function solution(s) {
  let strArr = s.split(' ');
  return strArr.map( v=> {
    let changeStr = '';
    for(let i=0; i<v.length; i++) {
      changeStr += (i%2) ? v[i].toLowerCase() : v[i].toUpperCase();
    }
    return changeStr;
  }).join(' ');
}

/*
 * 나의 풀이
 * 1. 문자열을 공백으로 쪼개어 배열을 만든다.
 * 2. 배열을 반복한다.
 * toLowerCase() : 소문자로 바꾸는 메소드
 * toUpperCase() : 대문자로 바꾸는 메소드
 * 두 메소드를 이용하여, 문자열에서 해당 문자의 인덱스가 짝수이면 대문자로, 홀수이면 소문자로 바꾼다.
 * 3. map의 리턴값(배열)을 join 메소드를 이용하여 문자열로 리턴한다.
 *
 */