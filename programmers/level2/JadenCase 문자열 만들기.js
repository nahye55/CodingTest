/*
  문제 설명
  JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

  제한 조건
  s는 길이 1 이상인 문자열입니다.
  s는 알파벳과 공백문자(" ")로 이루어져 있습니다.
  첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )
  입출력 예
  s	return
  3people unFollowed me	3people Unfollowed Me
  for the last week	For The Last Week
 */

function solution(s) {

  return s.split(' ').map( (v)=> {
    return v.split('').map( (x,i) => {
      return i === 0 ? x.toUpperCase() : x.toLowerCase();
    }).join('');
  }).join(' ');

}

/*
 * 나의 풀이
 * 1. 주어진 배열을 공백을 기준으로 split 하여 새로운 배열을 반환.
 * 2. 반환받은 배열을 map 을 통해 반복문 실행.
 * 3. split 하여 문자 하나하나씩을 읽어들임.
 * 4. 첫 인덱스(0) 이면 대문자로 변환하여 리턴, 첫 인덱스가 아니면 소문자로 변환하여 리턴한다.
 * 5. join() 메소드를 사용하여 배열을 string 형태로 리턴한다.
 *
 */