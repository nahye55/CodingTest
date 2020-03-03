/*
  문제 설명
  Write a function:

  function solution(A, B, K);

  that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

  { i : A ≤ i ≤ B, i mod K = 0 }

  For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

  Write an efficient algorithm for the following assumptions:

  A and B are integers within the range [0..2,000,000,000];
  K is an integer within the range [1..2,000,000,000];
  A ≤ B.
  Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(A,B,K) {
  return (Math.floor(B/K)+ ( A%K === 0 ? 1 : 0 )) - Math.floor(A/K);
}

/*
 * 나의 풀이
 * A와 B사이의 배수의 개수를 구하는 문제
 * 반복문으로 처리 시 timeouterror 발생한다 ex[0,20000000,1]
 * 
 */