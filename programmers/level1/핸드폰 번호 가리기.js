/*
  문제 설명
  프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
  전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

  제한 조건
  s는 길이 4 이상, 20이하인 문자열입니다.
  입출력 예
  phone_number	return
  01033334444	*******4444
  027778888	*****8888
*/

function solution(phone_number) {
  const subStr = phone_number.substring(phone_number.length-4, phone_number.length);
  return '*'.repeat(phone_number.length - 4) + subStr;
}

/*
 * 나의 풀이
 * 1. 주어진 phone number 문자열에서 substring() 메소드를 사용해 뒷자리 4자리만 자른다.
 * 2. repeat() : 문자열 반복 메소드
 * 주어진 문자열에서 4자리를 제외한 길이만큼 *를 반복 후, 뒷자리 4자리를 더해 리턴한다.
 * 
 */