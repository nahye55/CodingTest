/*
  문제 설명
  A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

  Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

  The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

  In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

  For example, consider array A such that:

    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 4
    A[4] = 3
  We can split this tape in four places:

  P = 1, difference = |3 − 10| = 7
  P = 2, difference = |4 − 9| = 5
  P = 3, difference = |6 − 7| = 1
  P = 4, difference = |10 − 3| = 7
  Write a function:

  function solution(A);

  that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

  For example, given:

    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 4
    A[4] = 3
  the function should return 1, as explained above.

  Write an efficient algorithm for the following assumptions:

  N is an integer within the range [2..100,000];
  each element of array A is an integer within the range [−1,000..1,000].
  Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(A) {

  let returnMin = 1000;
  let total = 0;
  let leftSum = 0;

  for(let i=0; i<A.length; i++) {
    total += A[i];
  }


  for(let i=0; i<A.length; i++) {
    leftSum += A[i];
    let rightSum = total-leftSum;

    let min = Math.abs(leftSum - rightSum);
    if(returnMin > min) {
      returnMin = min;
    }

  }

  return returnMin;

}

function solution2(A) {

  let returnMin = 100000;
  let total = 0;
  let leftSum = 0;

  for(let i=0; i<A.length; i++) {
    total += A[i];
  }

  for(let i=1; i<=A.length-1; i++) {
    leftSum += A[i-1];
    let rightSum = total-leftSum;
    let min = Math.abs(leftSum - rightSum);
    if(returnMin > min) {
      returnMin = min;
    }

  }

  return returnMin;

}

/*
 * 나의 풀이
 * solution()
 * 1. 배열의 총합을 먼저 구한다.
 * 2. 배열을 반복문을 돌면서, 총합에서 앞부분(leftSum)값을 빼면 뒷부분의 합(rightSum)을 계산한다.
 * 3. 가장 작은 최소차이를 찾는다.
 *
 *
 * 점수 : 84% > 오답 발견
 * 오류 케이스 : [-1000,1000]
 * 개선 사항
 * solution2()
 * 1. returnMin의 값을 충분히 크게 가져야 한다.
 * 배열요소의 최대값은 1000이므로, 1000+999 의 이상의 값으로 returnMin을 선언해야 한다.
 * 2. for문의 초기값 지정 실수
 *
 *
 */