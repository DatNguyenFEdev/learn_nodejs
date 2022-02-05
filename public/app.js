function toggleStatus() {
    todos[i].status == "complete";
  }

  function submitForm(todoName) {
    console.log('todoName');
    console.log(todoName);
    console.log(C)
  }
function handleEdit(todoId){
  var inputCurrent = document.querySelector('.input-current');
  var inputHidden = document.querySelector('.input-hidden');
  inputCurrent.style.display = 'none';
  inputHidden.style.display = 'block';
  console.log(todoId);

}