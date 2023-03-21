const item = document.getElementById('todo');
const box = document.querySelector('#box-to');
const btn = document.querySelector("button");
const form = document.querySelector("form");

item.addEventListener(
  "keyup",
  function(e){
    if(e.key == "Enter"){
      TODO(this.value);
      this.value = "";
    }
  }
)





const TODO = (item) => {
  const list = document.createElement("li");
  list.innerHTML = `

      ${item}
      <i class="fa-solid fa-trash"></i>


  `;
  list.addEventListener(
    "click",
    function(){
      this.classList.toggle("one");
    }
  )
  list.querySelector("i").addEventListener(
    "click",
    function(){
      list.remove();
    }
  )
  box.appendChild(list);
}
