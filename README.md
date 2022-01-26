<p align="middle" >
  <img src="https://user-images.githubusercontent.com/24728385/148955263-b3a0e063-6950-46f2-82e9-1fcabc24e19e.jpeg"/>
</p>
<br/>
<h1 align="middle">[과제] 와이어바알리/레드브릭</h1>

## 🔗 배포
[Link](https://pob-sixted-week1.herokuapp.com/)
<br>

## ⚙️ 설치 및 시작하는 법
```
git clone https://github.com/pre-onboarding-course-team-6/1st-week-wirebarley-redbrick-task
npm i or yarn
```
<br>

## 🏹 과제 구현 목록

> 구현사항 정리 [🔗]()
## 공통기능 
1. API 연동
    - 환율정보 갱신


## 계산기 👆
1. Select Box
    - 수취 국가를 바꾸면 환율정보도 갱신
2. 송금액 예외처리
    - 송금액 0이하 10,000이상, 문자 입력시 에러처리
    - alert으로 팝업창
3. Submit 기능
    - Submit 클릭시 수취금액 계산
    - 소수점 2자리까지, 3자리 이상되면 콤마 찍기

## 계산기 ✌
1. Input Box
    - 특수문자 입력, 0중복입력 에러처리
    - 3자리 이상되면 콤마 찍기
    - 1,000이상 입력시 에러처리
2. Select Box
    - 송금국가 선택
3. Tab
    - 수취국가 선택
    - Selcet Box로 통화 변경시 수취 금액도 함께 변경
    - 소수점 2자리까지, 3자리 이상되면 콤마 찍기
4. 날짜
    - 날짜 포맷 KST으로 표기

<br>

## 💻 실행 결과



![calculator](https://user-images.githubusercontent.com/34917143/151076441-0c803a98-d564-4fb2-9630-45eed857a3a9.gif)

<br>

## 🏗 프로젝트 구조 설명
~~~
📦src
 ┣ 📂commons
 ┃ ┗ 📂constants
 ┃ ┃ ┗ 📜currencyList.js   - Select Box 리스트
 ┣ 📂components
 ┃ ┣ 📂FirstCalculator
 ┃ ┃ ┗ 📜index.jsx         - 첫번째 계산기 index 파일
 ┃ ┗ 📂SecondCalculator
 ┃ ┃ ┣ 📜index.jsx         - 두번째 계산기 index 파일
 ┃ ┃ ┗ 📜styled.js         - 두번째 계산기 Tab style
 ┣ 📂utils
 ┃ ┣ 📜Api.js              - API 연동
 ┃ ┣ 📜Calculate.js        - 송금액 -> 수취액 계산식
 ┃ ┣ 📜numAddComma.js      - 3자리 콤마 추가
 ┃ ┗ 📜timeConvertor.js    - 두번째 계산기 날짜식
 ┣ 📜App.js
 ┗ 📜index.js
~~~

<br>

## ✅ Git - Commit Message Convention [🔗](https://webruden.tistory.com/486)

- feat : 새로운 기능 추가 (a new feature)
- fix : 버그 수정 (a bug fix)
- docs : 문서 수정 (changes to documentation)
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 (formatting, missing semi colons, etc; no code change)
- refactor : 코드 리펙토링 (refactoring production code)
- test : 테스트 코드, 리펙토링 테스트 코드 추가 (adding tests, refactoring test; no production code change)
- chore : 빌드 업무 수정, 패키지 매니저 수정 (updating build tasks, package manager configs, etc; no production code change)

<br>

## 👨‍👨‍👦‍👦 팀구성원 소개

| [<img src="https://github.com/minbr0ther.png" width="100px">](https://github.com/minbr0ther) | [<img src="https://github.com/BGM-109.png" width="100px">](https://github.com/BGM-109) | [<img src="https://github.com/wiseeee.png" width="100px">](https://github.com/wiseeee) | [<img src="https://github.com/gilmujjang.png" width="100px">](https://github.com/gilmujjang) |
| :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
|                        [22_01 정민형](https://github.com/minbr0ther)                         |                       [22_01 김선명](https://github.com/BGM-109)                       |                       [22_01 이현명](https://github.com/wiseeee)                       |                        [22_01 민무길](https://github.com/gilmujjang)                         |
