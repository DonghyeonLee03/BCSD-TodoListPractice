#TodoList 제작
- TodoList를 만들면서 TypeScript 적용해봤습니다.
- form을 제어 컴포넌트로 구현하기 위해 plan이라는 state를 사용했습니다.
- Todo interface에는 핵심 기능에 필요한 id, text, done 속성만 선언하고, useReducer에서 필요한 action의 type과 정해진 type값에 따른 추가 정보들은 TodoAction이라는 type을 별도로 선언하여 정리했습니다.
- svgr 라이브러리를 설치하여 삭제 아이콘을 컴포넌트처럼 사용해봤습니다.
