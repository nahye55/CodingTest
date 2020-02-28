/*
  문제 설명
  An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

  Your goal is to find that missing element.

  Write a function:

  function solution(A);

  that, given an array A, returns the value of the missing element.

  For example, given array A such that:

    A[0] = 2
    A[1] = 3
    A[2] = 1
    A[3] = 5
  the function should return 4, as it is the missing element.

  Write an efficient algorithm for the following assumptions:

  N is an integer within the range [0..100,000];
  the elements of A are all distinct;
  each element of array A is an integer within the range [1..(N + 1)].
  Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(A) {

  let total = 0;
  for(let i = 0; i <= A.length; i++) {
    total += i;
  }

  for(let i=0; i<A.length; i++) {
    total -= A[i];
  }

  return total;

}

function solution2(A) {

  let N = A.length + 1;
  let total = (N * (N + 1)) / 2;

  for(let i=0; i<A.length; i++) {
    total -= A[i];
  }

  return total;

}

/*
 * 나의 풀이
 * 1. 배열안에서 최솟값,최댓값을 찾는다.
 * 2. 최소~최대값 사이의 모든 합을 구한다.
 * 3. 반복문으로 합-배열값을 하여 배열안에 누락된 값을 찾는다.
 *
 * 오류 케이스 : [] or [1] : A가 빈 배열인 경우나 single element인 경우 오류 발생
 * 개선 사항
 * solution2()
 * 1부터 N까지의 합계 (N * (N + 1)) / 2를 구하여 배열의 모든 값을 뺀다.
 *
 */