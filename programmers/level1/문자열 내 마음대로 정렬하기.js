/*
  문제 설명
  문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

  제한 조건
  strings는 길이 1 이상, 50이하인 배열입니다.
  strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
  strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
  모든 strings의 원소의 길이는 n보다 큽니다.
  인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
  입출력 예
  strings	n	return
  [sun, bed, car]	1	[car, bed, sun]
  [abce, abcd, cdx]	2	[abcd, abce, cdx]
  입출력 예 설명
  입출력 예 1
  sun, bed, car의 1번째 인덱스 값은 각각 u, e, a 입니다. 이를 기준으로 strings를 정렬하면 [car, bed, sun] 입니다.

  입출력 예 2
  abce와 abcd, cdx의 2번째 인덱스 값은 c, c, x입니다. 따라서 정렬 후에는 cdx가 가장 뒤에 위치합니다. abce와 abcd는 사전순으로 정렬하면 abcd가 우선하므로, 답은 [abcd, abce, cdx] 입니다.
 */

function solution(strings, n) {
  return strings.sort((a, b) => {
    const chr1 = a.charAt(n);
    const chr2 = b.charAt(n);

    if (chr1 == chr2) {
      return (a > b) - (a < b);
    } else {
      return (chr1 > chr2) - (chr1 < chr2);
    }
  })
}


function solution2(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}

/*
 * 나의 풀이
 * 1. sort() 메소드로 주어진 배열을 정렬하여 리턴한다.
 * 2. 정렬기준
 * 주어진 문자열에서 n번째 문자열을 변수로 선언한다.
 * 두 문자가 같으면, 오름차순으로 정렬
 * 두 문자가 다르면, 문자열을 기준으로 오름차순 정렬
 * '문자' - '문자' = boolean 형태로 리턴.
 * 사전순으로 앞선 문자열이 더 작다.
 *
 * 개선사항
 * solution2() : localCompare() 메소드를 사용한 비교.
 * 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴하는 메소드.
 *
 */