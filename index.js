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

    while (list.children.length != 0) {
      list.removeChild(list.children[0]);
    }
    list.innerHTML = '';

  });

}
