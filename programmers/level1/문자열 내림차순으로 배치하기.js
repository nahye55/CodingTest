/*
  문자열 내림차순으로 배치하기
  문제 설명
  문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
  s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

  제한 사항
  str은 길이 1 이상인 문자열입니다.
  입출력 예
  s	return
  Zbcdefg	gfedcbZ
 */

function solution(s) {
  let arr=[];
  for(let i=0; i<s.length; i++) {
    arr.push(s[i])
  }
  return arr.sort().reverse().join('');
}

function solution2(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}

/*
 * 나의 풀이
 * 1. 반복문을 통해 문자 한자씩 배열에 담는다.
 * 2. 배열을 정렬하고(sort), 원소의 순서를 반대로 정렬한다(revers)
 * 3. 배열을 문자열로 리턴한다.
 *
 * 개선 사항
 * solution2() : 반복문대신 split() 메소드로 배열로 리턴받는다.
 * split() : 문자열을 쪼개 배열로 반환
 */