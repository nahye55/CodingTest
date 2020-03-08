/*
  문제 설명
  문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 (최소값) (최대값)형태의 문자열을 반환하는 함수, solution을 완성하세요.
  예를들어 s가 1 2 3 4라면 1 4를 리턴하고, -1 -2 -3 -4라면 -4 -1을 리턴하면 됩니다.

  제한 조건
  s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
  입출력 예
  s	return
  1 2 3 4	1 4
  -1 -2 -3 -4	-4 -1
  -1 -1	-1 -1
 */

function solution(s) {
  const arr = s.split(' ').sort((a,b) => { return a - b; });
  return arr.filter( (v,i) => {
    if(i === 0 || i === arr.length-1) {
      return v;
    }
  }).join(' ');
}

function solution2(s) {
  const arr = s.split(' ');
  return Math.min(...arr)+' '+Math.max(...arr);
}

/*
 * 나의 풀이
 * 1. 주어진 문자열을 쪼개어 오름차순으로 정렬한다.
 * 2. 정렬된 배열에서, 첫번째 인덱스와 마지막 인덱스만 걸러낸다.
 * 3. 배열을 문자열로 출력한다.
 *
 * 개선 사항
 * solution2() : Math의 min(), max() 메소드를 이용하여 배열에서 최솟값, 최댓값을 찾아낸다.
 *
 */