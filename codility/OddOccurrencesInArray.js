/*
  문제설명
  A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
  
  For example, in array A such that:
  
    A[0] = 9  A[1] = 3  A[2] = 9
    A[3] = 3  A[4] = 9  A[5] = 7
    A[6] = 9
  the elements at indexes 0 and 2 have value 9,
  the elements at indexes 1 and 3 have value 3,
  the elements at indexes 4 and 6 have value 9,
  the element at index 5 has value 7 and is unpaired.
  Write a function:
  
  function solution(A);
  
  that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.
  
  For example, given array A such that:
  
    A[0] = 9  A[1] = 3  A[2] = 9
    A[3] = 3  A[4] = 9  A[5] = 7
    A[6] = 9
  the function should return 7, as explained in the example above.
  
  Write an efficient algorithm for the following assumptions:
  
  N is an odd integer within the range [1..1,000,000];
  each element of array A is an integer within the range [1..1,000,000,000];
  all but one of the values in A occur an even number of times.
  Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = null;
  while(result === null) {
    let A_ = A.shift();
    let A_idx = A.indexOf(A_);

    if(A_idx > -1) {
      A.splice(A_idx, 1);
    } else {
      result = A_;
    }
  }

  return result;
}

function solution2(A) {
  let result = 0;

  for (let i=0; i<A.length; i++) {
    result ^= A[i];
  }

  return result;
}

/*
 * 점수 : 66% > 시간 초과 오류
 * 개선 사항
 * solution2() : 비트연산 XOR 을 사용.
 * XOR ? 각 비트를 비교하여 값이 다르면 참, 값이 같으면 거짓을 반환
 * 0 ^ 9 = 9 / 9 ^ 3 = 10 /10 ^ 9 = 3 /
 * 3 ^ 3 = 0 / 0 ^ 9 = 9 / 9 ^ 7 = 14 /
 * 14 ^ 9 = 7
 *
 */