import './style.css'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Helloo!!</h1>
    <button id="btnMAGIA">MAGIA!</button>
  </div>
  <div class="visually-hidden position-absolute mt-4 border-bottom" id="hidden">
      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHBiaW5pMGszbm9udTg2NWxzZDM5cjd0c3VxaXgwNzhmM2VtM2VpNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1YcLOSW6JCNdsfSr5E/giphy.gif" style="width:25%">
      <h2 class="fs-1">Hey its me</h2>
  </div>
`
let btnDOM = document.getElementById('btnMAGIA') as HTMLButtonElement;
let elemento = document.getElementById('hidden') as HTMLElement;
console.log(btnDOM);

//Hacer que el boton realice un alert que diga "..."
btnDOM.addEventListener('click', () => {
  elemento.classList.toggle("visually-hidden");
});
