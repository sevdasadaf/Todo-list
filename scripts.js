const input = document.getElementById('to-do-input');
const add_btn = document.getElementById('btn');
const li_list = document.getElementById('list-ul')

function new_to_do () {
  
    let li = document.createElement('li');
    let input_value = input.value;
    let to_do_list = document.createTextNode(input_value)
    li.appendChild(to_do_list)
    
    if(input_value === ''){
        alert('You must write something!')
    }

    else {
        li_list.appendChild(li)
    }
    
    input.value = "";
    
    let close_btn = document.createElement('span');
    close_btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    close_btn.className = 'close-btn';
    li.appendChild(close_btn) 
    
    
    close_btn.onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  
}

add_btn.addEventListener('click', new_to_do);


let ul_list = document.querySelector('ul');
ul_list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);



