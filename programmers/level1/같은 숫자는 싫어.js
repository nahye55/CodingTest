/*
  문제 설명
  배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

  arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
  arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
  배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

  제한사항
  배열 arr의 크기 : 1,000,000 이하의 자연수
  배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
  입출력 예
  arr	answer
  [1,1,3,3,0,1,1]	[1,3,0,1]
  [4,4,4,3,3]	[4,3]
  입출력 예 설명
  입출력 예 #1,2
  문제의 예시와 같습니다.
 */

function solution(arr){
  let answer = [];

  for(let i=0; i<arr.length; i++) {
    if(i === 0) {
      answer.push(arr[i]);
    } else {
      if(arr[i-1] !== arr[i]) {
        answer.push(arr[i]);
      }
    }
  }

  return answer;
}

function solution2(arr)
{
  return arr.filter((val,index) => val != arr[index+1]);
}

/*
 * 나의 풀이
 * 1. 배열의 첫 index의 값은 리턴할 배열에 담는다.
 * 2. 현재 index의 값과 1 작은 index의 값을 비교하여 같으면 중복으로 판단
 * 3. 같지 않은 경우에만 리턴할 배열에 담는다.
 *
 * 개선 사항
 * solution2() : filter 메소드를 사용하여 간단하게 구현.
 *
 */