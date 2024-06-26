let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');
let contador = 0


function addTarefa(){
    let valorInput = input.value;
    if((valorInput !== '') && (valorInput !== null) && (valorInput !== undefined)){
        ++contador
    let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <span id="icone_${contador}" class="material-symbols-outlined">
        radio_button_unchecked
        </span>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}

        </div>
        <div class="item-botao ">
            <button onclick="deletar(${contador})" id="delete"> <span class="material-symbols-outlined">
                delete
            </button>
                </span>
        </div>
    </div> `;
    //ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;
    }
    
    //ZERAR CAMPO
    input.value = "";
    input.focus();
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();

}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    var icone = document.getElementById('icone_'+id);
    if(classe == "item"){
        item.classList.add('clicado')

        icone.textContent = 'check_circle'

        item.parentNode.appendChild(item);
  
    }else{
        item.classList.remove('clicado')
        icone.textContent = 'radio_button_unchecked'
    }

    }

input.addEventListener("keyup", function(event) {

    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click()
    }
    
})