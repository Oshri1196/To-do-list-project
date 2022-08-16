const taskForm = document.querySelector('#form');

const El = document.querySelector(".card")
const card = document.querySelector('#card');


function onSubmit(e){
  e.preventDefault();
  const textarea = taskForm.querySelector('#textarea').value;
  const meetingTime = taskForm.querySelector('#meetingTime').value;

  document.getElementById("form").reset();

  card.innerHTML +=`
    <div class="card">
    <button class="Button">X</button>
      <p class="text">${textarea}</p>
      <p class="time">${meetingTime}</p>
    </div>
     `;
     taskForm.reset()
  }

  function onDelete(e){
    if(!e.target.classList.contains('Button')){
        return;
    };
    
    const delbtn = e.target;
delbtn.closest('.card').remove();
}

  taskForm.addEventListener('submit', onSubmit);
  card.addEventListener('click', onDelete);



