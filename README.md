# 📝원티드 프리 온보딩 개인 과제 - 집꾸미기

## **💡 웹사이트 배포**

​ 👉 [배포링크](https://competent-sammet-34d2e7.netlify.app) 👈

## **💡 과제 소개**

- 집꾸미기 집소개 기능에 포함되어 있는 사진과 가구 정보를 조합하는 컴포넌트 구현하기

## **💡 구현 기능 상세**

- 사진과 가구에 대한 정보를 API를 통해 호출했습니다.
- 가구 정보가 있는 곳에 돋보기 모양의 버튼이 표시됩니다.
- 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경됩니다.
- tool tip은 하나만 노출됩니다. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출됩니다.
- 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
- 선택된 가구는 border의 색상이 변경됩니다.
- **특이사항** : 데이터의 x축과 y축 값이 바뀌어 있어서, 가로에 y값을 세로에 x값을 넣는 식으로 처리했습니다.

## **💡 설치 및 시작하는 법**

**프로젝트 클론**

```bash
$ git clone "https://github.com/perfumelim/ggumim-contents.git"
```

**패키지 설치**

```bash
$ npm install or yarn
```

**서버 실행**

```bash
$ npm run start or yarn run start
```
