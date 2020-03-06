/*
  문제 설명
  두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
  예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

  제한 조건
  a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
  a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
  a와 b의 대소관계는 정해져있지 않습니다.
  입출력 예
  a	b	return
  3	5	12
  3	3	3
  5	3	12
 */

function solution(a, b) {
  let answer = 0;
  let min, max;
  if(a === b) {
    answer = a;
  } else {
    max = a > b ? a : b;
    min = a > b ? b : a;

    for(let i = min; i <= max; i++) {
      answer += i;
    }

  }
  return answer;
}

/*
 * 나의 풀이
 * 1. a와 b가 같을때는 a,b 중 아무 값이나 리턴하므로 a를 리턴한다.
 * 2. a,b 를 비교하여 큰 수와 작은 수를 max, min 변수로 선언한다.
 * 3. 작은수에서 큰 수까지 반복하여 합을 더한다.
 *
 * 개선 사항
 * max, min 값을 찾을 때, 조건문 사용 대신 Math 의 메소드를 사용할 수 있다.
 * Math.max(a,b), Math.min(a,b)
 *
 */