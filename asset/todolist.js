/* 150702
 * keycode event
 * 1 enter키(keycode : 13) 입력 이벤트
 * 2 이벤트 발생 시 todo(li element) 추가
 */

document.addEventListener("DOMContentLoaded", function(){

	var newTodo = document.getElementById("new-todo");
	newTodo.addEventListener("keydown", function(event){
		// 1 enter키 입력 
		if(event.keyCode === 13){
			// 2 todo 추가 : li 생성(구조에 맞춰서) - List에 li 추가  
			var todoLabel = newTodo.value;
			if(todoLabel === ""){
				alert("할 일을 입력해주세요!");
				return;
			}

			// var todoItem = document.createElement("li");
			// todoItem.setAttribute("class", "{}");
			// todoItem.innerHTML = '<div class="view"><input class="toggle" type="checkbox" {}><label>' 
			// 					+ todoLabel 
			// 					+ '</label><button class="destroy"></button></div>';
			// var todoList = document.getElementById("todo-list");
			// todoList.appendChild(todoItem);

			// handlebar 적용
			// [TODO] li까지 template으로 - jquery parseHTML()?
			var todoItem = document.createElement("li");
			todoItem.setAttribute("class", "{}");
			var source = '<div class="view"><input class="toggle" type="checkbox" {}><label>{{todoLabel}}</label><button class="destroy"></button></div>';
			var template = Handlebars.compile(source);
			var data = {"todoLabel" : todoLabel};
			var result = template(data);
			
			todoItem.innerHTML = result;
			var todoList = document.getElementById("todo-list");
			todoList.appendChild(todoItem);

			// input창 초기화
			newTodo.value = "";
		}		
	}, false);

});