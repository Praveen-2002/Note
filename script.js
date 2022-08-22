let t = document.querySelector('textarea.form-control');
let selector = document.querySelector('select');
var dark = document.getElementsByTagName('a')[1];
var cards = document.getElementsByClassName('card');

//dark mode
dark.addEventListener('click',(e)=>{
  document.body.classList.toggle('dark-mode');
  cards[0].classList.toggle('bg-dark');

  if (dark.innerText == 'Dark'){
    document.querySelector('nav').className = 'navbar navbar-dark bg-dark';
    localStorage.setItem('mode','Light')
    dark.innerText = 'Light'

  }else{
    document.querySelector('nav').className = 'navbar navbar-light bg-light';
    localStorage.setItem('mode','Dark');
    dark.innerText = 'Dark'
  }
})

// loacalStorage
if(localStorage.getItem('mode')==null){
  localStorage.setItem('mode','Dark')}
if (localStorage.getItem('mode')=='Light'){
  dark.click();
}
if (localStorage.getItem(1) == null) {
  localStorage.setItem(1, JSON.stringify([]));
}
if (localStorage.getItem('notes') == null) {
  localStorage.setItem('notes', JSON.stringify([]))
}

let s = JSON.parse(localStorage.getItem(1));
let note = JSON.parse(localStorage.getItem('notes'))
items();

function select() {
  note.push(selector.value);
  localStorage.setItem('notes', JSON.stringify(note));
  note.value = '';
}

function items() {
  let a = ''
  for (let i = 0; i < s.length; i++) {
    a += "<div class='card shadow p-3 mb-5 bg-body rounded' style='width: 16rem; margin:2.5rem;'><div class='card-body'><h5 class='card-title' style='color:black'>" + note[i] + "</h5><p class='card-text' style='color:black'>" + s[i] + "</p><button type='button' id=" + i + " class='btn btn-primary delete'>Delete</button></div></div>";
  }
  document.querySelector('.row').innerHTML = a;
}
//addEventListener
document.addEventListener('click', (e) => {
  let d = e.target;
  if (d.innerHTML === 'Delete') {
    let int = parseInt(d.id);
    s.splice(int, 1); //remove element by index
    note.splice(int, 1);
    localStorage.setItem('notes', JSON.stringify(note));
    localStorage.setItem(1, JSON.stringify(s));
    items();
  } else if (d.innerHTML === 'Add Note') {
    s.push(t.value);
    localStorage.setItem(1, JSON.stringify(s));
    t.value = '';
    select();
    items();
  }
});

//searching

let find = document.querySelector('#Search');
find.addEventListener('input', (e) => {
  for (let i = 0; i < s.length; i++) {
    let p = document.getElementById(String(i)).parentNode.parentNode;
    if ((s[i].toLowerCase()).includes(find.value)) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  }
})
