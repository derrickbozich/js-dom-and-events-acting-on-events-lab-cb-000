function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector("input[name='name']").value.trim();
}

function addNewElementAsLi(){
  let list = document.querySelector('.employee-list');
  let li = document.createElement("li");
  li.innerText = retrieveEmployeeInformation();
  list.appendChild(li);
}

function addNewLiOnClick(){
  let button = document.querySelector("input[type='submit']");
  button.addEventListener("click", () => {
    addNewElementAsLi();
    document.querySelector("input[name='name']").value = ''
  });
}

function clearEmployeeListOnLinkClick(){
  let anchor = document.querySelector('a');
  anchor.addEventListener('click', () => {
    let list = document.querySelector('.employee-list');
    for (let i = 0; i < list.length; i++){
      list.removeChild(list.children[i]);
      debugger
    }

  });

}
