// localStorage.set[get]Item('key값', 'value값'); 
// 브라우저에 string 을 저장
// localStorage.getItem('key값');


const todoArr = [];

function addTodoArr() {
    const contentTag = document.querySelector('input[name=content]');
    const managerTag = document.querySelector('input[name=manager]');
    const content = contentTag.value;
    const manager = managerTag.value;
    // todoArr.push(text);
    const todoObject = {
        'content'  : content,
        'manager' : manager
    };
    todoArr.push(todoObject);    
}
//JSON.stringfy(객체 또는 배열);
//매개변수로 받은 값을 json에 저장하기 편한 문자열로 자동 변환
function enrollTodo() {
    const date = document.querySelector('input[name=deadLine]').value;
    alert("오늘의 일기를 저장하시겠습니까?");
    const jsonStr = JSON.stringify(todoArr);
    localStorage.setItem( date , jsonStr );
}
//JSON.parse(객체 또는 배열);
// JSON 형식의 문자열 -> JS객체(또는 배열)에 맞게 변환
function selectTodo(){
    const date = document.querySelector('#date').value;
    const selectTodo = localStorage.getItem(date);
    const result = JSON.parse(selectTodo); 
    const divTag = document.querySelector('#todo-list');
    for (const i of result) {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = '- 내가 오늘 느낀 감정은 : ' + i.manager + '\n- 그 감정을 느꼈을 때 상황은 : ' + i.content;
        divTag.appendChild(textarea);
    }
}