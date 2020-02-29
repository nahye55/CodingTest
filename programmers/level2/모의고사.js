/*
  문제 설명
  수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

  1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
  2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
  3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

  1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

  제한 조건
  시험은 최대 10,000 문제로 구성되어있습니다.
  문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
  가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
  입출력 예
  answers	return
  [1,2,3,4,5]	[1]
  [1,3,2,4,2]	[1,2,3]
  입출력 예 설명
  입출력 예 #1

  수포자 1은 모든 문제를 맞혔습니다.
  수포자 2는 모든 문제를 틀렸습니다.
  수포자 3은 모든 문제를 틀렸습니다.
  따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

  입출력 예 #2

  모든 사람이 2문제씩을 맞췄습니다.
 */

function solution(answers) {
  const num1 = [1, 2, 3, 4, 5];
  const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answer = [];
  let count = [0,0,0];

  answers.map( (v,i) => {
    num1[i%5] === v && (count[0] += 1);
    num2[i%8] === v && (count[1] += 1);
    num3[i%10] === v && (count[2] += 1);
  });

  const max = Math.max(...count);
  for(let i=0; i<3; i++) {
    max === count[i] && answer.push(i+1);
  }

  return answer.sort( (a,b) => a - b );
}

function solution2(answers) {
  const num1 = [1, 2, 3, 4, 5];
  const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answer = [];
  let count = [0,0,0];

  for(let i=0; i<answers.length; i++) {
    num1[i%num1.length] === answers[i] && (count[0] += 1);
    num2[i%num2.length] === answers[i] && (count[1] += 1);
    num3[i%num3.length] === answers[i] && (count[2] += 1);
  }

  const max = Math.max(...count);
  for(let i=0; i<3; i++) {
    max === count[i] && answer.push(i+1);
  }

  return answer.sort( (a,b) => a - b );
}

/*
 * 나의 풀이
 * 1. 정답을 찍는 패턴을 num(i)로 선언한다.
 * 2. 맞춘 정답의 수를 count 배열에 담는다.
 * 3. 가장 많이 맞춘 정답 수를 max 변수로 선언한다.
 * 4. count 배열의 값과 max값이 일치하면? 가장 많이 맞춘 것 이므로
 * 인덱스+1 순으로 answer 배열에 push한다.
 * 5. answer 배열을 오름차순 정렬한다.
 *
 * 개선 사항
 * solution2()
 * 1. line 40. 배열을 리턴하지 않을 것이므로 굳이 map을 쓰기보단 for문을 사용할 것.
 * 2. line 41~43. 하드코딩된 숫자 => num(i).length 로 명확히 선언할 것.
 *
 */