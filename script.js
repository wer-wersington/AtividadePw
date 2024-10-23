var formulario = document.getElementById('frmContato')
var  nome = document.getElementById('txtNome')

let currentIndex = 0
const items = document.querySelectorAll('.carousel-item')
const totalItems = items.length

function updateCarousel() {
        
    const offset = -currentIndex * 800
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`
}

function moveSlide(direction) {
    currentIndex += direction
    if (currentIndex < 0) {
        currentIndex = totalItems - 1
    } else if (currentIndex >= totalItems) {
        currentIndex = 0
    }
    updateCarousel()
}

formulario.addEventListener('submit', function(event) 
{
    if(nome.value == ' ')
    {
            alert('Digite um nome')
    }else if(nome.value =! null)
        {
                alert('Formulario enviado com sucesso')
        }
})

