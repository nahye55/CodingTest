/*
  문제 설명
  This is a demo task.

  Write a function:

  function solution(A);

  that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

  For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

  Given A = [1, 2, 3], the function should return 4.

  Given A = [−1, −3], the function should return 1.

  Write an efficient algorithm for the following assumptions:

  N is an integer within the range [1..100,000];
  each element of array A is an integer within the range [−1,000,000..1,000,000].
  Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(A) {

  A.sort((a, b) => { return a-b; });
  let min = 1;

  for(let i=0; i<A.length; i++) {
    if(A[i] === min) {
      min++;
    }
  }

  return min;


}


/*
 * 나의 풀이
 * 1. 배열을 정렬한다.
 * 2. 가장작은 양의정수는 1이므로, 변수를 1로 선언한다.
 * 3. 배열을 돌면서, 배열안에 min 값이 있으면 1 증가시킨다.
 *
 */