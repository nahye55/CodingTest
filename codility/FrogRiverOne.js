 /*
  문제 설명
  A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

  You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

  The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

  For example, you are given integer X = 5 and array A such that:

    A[0] = 1
    A[1] = 3
    A[2] = 1
    A[3] = 4
    A[4] = 2
    A[5] = 3
    A[6] = 5
    A[7] = 4
  In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

  Write a function:

  function solution(X, A);

  that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

  If the frog is never able to jump to the other side of the river, the function should return −1.

  For example, given X = 5 and array A such that:

    A[0] = 1
    A[1] = 3
    A[2] = 1
    A[3] = 4
    A[4] = 2
    A[5] = 3
    A[6] = 5
    A[7] = 4
  the function should return 6, as explained above.

  Write an efficient algorithm for the following assumptions:

  N and X are integers within the range [1..100,000];
  each element of array A is an integer within the range [1..X].
  Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

 */

function solution(X, A) {
  let answer = -1;
  let arr = Array(X).fill();
  for(let i = 0 ; i < A.length; i++) {
    let cnt = 0;
    arr[A[i]-1] = A[i];
    for(let j = 0; j<arr.length; j++) {
      if(arr[j] === undefined) {
        break;
      } else {
        cnt++;
      }
    }

    if(arr.length === cnt) {
      answer = i;
      break;
    }
  }

  return answer;

}

 function solution2(X, A) {

   let answer = -1;
   let arr = new Set();
   for(let i = 0 ; i < A.length; i++) {

     arr.add(A[i]);

     if(arr.size === X) {
       answer = i;
       break;
     }
   }

   return answer;

 }

/*
 * 나의풀이
 * 1. X 크기만큼의 배열을 선언한다.(arr)
 * 2. arr 배열안에 undefined가 존재하는지 체크한다.
 * undefined를 발견하면, 다음 반복문으로 진행
 * undefined가 없으면, 카운트.
 * 카운트가 arr.length와 일치하면 최단경로를 찾은 것으로 판단한다.
 * 점수 : 72% > The following issues have been detected: timeout errors.
 * 개선 사항
 * solution2() :
 * X가 큰 수 일때, arr의 길이도 길어지므로, 반복문을 도는게 비효율적
 * set을 이용하여 풀이
 */