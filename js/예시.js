// var homes = new Array(); 아래 var와 같음
var homes = [];


// homes라는 공간을 0, 1, 2로 나눔
homes[0] = "홍길동";
homes[1] = "홍길순";
homes[2] = "홍길만";
/////////////////////
// homes에 있는 공간 0, 1, 2를 각각 0, 1, 2로 한 번 더 나눔
homes[0] = [];
homes[0][0] = "홍길동";
homes[0][1] = 29;
homes[0][2] = "M";
homes[1] = [];
homes[1][0] = "홍길순";
homes[1][1] = 25;
homes[1][2] = "W";
homes[2] = [];
homes[2][0] = "홍길만";
homes[2][1] = 37;
homes[2][2] = "M";
/////////////////////
//위의 javascript 함수는 반복문이라고 할 수 있음
//규칙이 있기 때문에 하나의 함수만을 넣고 반복실행으로 돌리면 됨