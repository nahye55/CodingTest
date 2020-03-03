/*
  문제 설명
  A non-empty array A consisting of N integers is given.

  A permutation is a sequence containing each element from 1 to N once, and only once.

  For example, array A such that:

      A[0] = 4
      A[1] = 1
      A[2] = 3
      A[3] = 2
  is a permutation, but array A such that:

      A[0] = 4
      A[1] = 1
      A[2] = 3
  is not a permutation, because value 2 is missing.

  The goal is to check whether array A is a permutation.

  Write a function:

  class Solution { public int solution(int[] A); }

  that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

  For example, given array A such that:

      A[0] = 4
      A[1] = 1
      A[2] = 3
      A[3] = 2
  the function should return 1.

  Given array A such that:

      A[0] = 4
      A[1] = 1
      A[2] = 3
  the function should return 0.

  Write an efficient algorithm for the following assumptions:

  N is an integer within the range [1..100,000];
  each element of array A is an integer within the range [1..1,000,000,000].
  Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(A) {

  let a = new Set();
  for(let i=0; i<A.length; i++) {
    a.add(A[i]);
  }

  if(a.size !== A.length) {
    return 0;
  } else {
    return a.size === Math.max(...A) ? 1 : 0;
  }

}

/*
 * 나의 풀이
 * 1. 배열 A를 set에 add한다. : 중복이 사라짐
 * 2. 배열 A의 길이와 set a의 사이즈가 다른 경우,
 * 중복된 값이 있었다는 것은 순열이 아니므로 0을 리턴한다.
 * 3. 배열 A의 길이와 set a의 사이즈가 같은 경우,
 * a의 사이즈와 배열 A의 최대값이 일치하면 순열로 판단하여 1을 리턴한다.
 * 배열은 1부터 N까지 주어지므로..
 *
 */