/*
  문제 설명
  문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

  제한 사항
  s는 길이 1 이상, 길이 8 이하인 문자열입니다.
  입출력 예
  s	return
  a234	false
  1234	true
 */

function solution(s) {

  const temp = parseInt(s);
  if(s.length === 4 || s.length === 6){
    if(s==temp){
      return true;
    }
    return false;
  } else {
    return false;
  }

}

/*
 * 나의 풀이
 * 1. 문자열의 길이가 4 or 6이 아니면 무조건 false를 리턴한다.
 * 2. 문자열의 길이가 4 or 6일 때,
 * 문자열 s를 정수형으로 바꾼 값이 문자열과 일치하면 true, 아닌 경우 false이다.
 * 만약 주어진 문자열이 숫자로만 이루어지지 않았다면, parseInt(s) 의 값은 NaN 이다.
 *
 */