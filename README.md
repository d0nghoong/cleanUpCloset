# cleanUpCloset
옷장에 무엇이 있는 지를 정리해서 보여주는 사이트 만들기

## main.html
41행:ul 태그만 정의하고 리스트들은 동적 내용이기에 자바스크립트에서 정의한다

## design.css
4행: flex display 바탕으로 요소들을 정렬한다<br>
30행: transform의 translate로 박스의 위치를 내린다<br>
73행: 자바스크립트에 조건에 맞는 경우 삽입할 class이다

## review.js
1행: list에 관한 정보를 담고 있는 json을 받아온다<br>
7행: json 내용을 바탕으로 li 태그를 만든다<br>
20행: html에서 설정한 dataset key와 dataset value를 할당하며, 이미지가 아닌 곳을 누른 경우 head 이미지를 누른 경우, 메뉴를 누른 경우를 구분 짓는다<br>
30행: 요건에 충족하는 리스트만 보이도록 한다<br>
