const $form = $('#suscribeForm')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit(function (ev) {
 ev.preventDefault()
    
    const error = Math.random() > 0.5
    $formGroup.removeClass().addClass('form-group')
    $formControl.removeClass().addClass('form-control')
    $formGroup.addClass(error ? 'has-danger' : 'has-success' )
    $formControl.addClass(error ? 'form-control-danger' : 'form-control-success' )
    $formGroup.find('.form-control-feedback').remove()
    
    
    var el ;
    if (error) {
        el = $('<div>',{html: 'Ha ocorrido un error'})
    } else {
        el = $('<div>',{html: 'Te enviaremos todas las novedades'})
    }
    el.addClass('form-control-feedback')
    $formGroup.append(el)
 })

function mostrarModal() {
    const noMostrarModal = JSON.parse(localStorage.noMostrarModal)// con esta linea obtenemos el valor booleano true o false
    if (!noMostrarModal) {
       $('#modal0ferta').modal() // con esta line ase llama al modal de boostrad  
    }
    

    $('#btnNoRegistrar').click(function(ev) {/* con esta linea se almacena el valor no registar para no mostrar el modal*/
        localStorage.noMostrarModal = true
    })
}

const $filtrosToggle = $('#filtrosToggle')
$filtrosToggle.click(function (ev) {
    ev.preventDefault()
    const $i = $filtrosToggle.find('i.fa')
    const isDown = $i.hasClass('fa-chevron-down')
    if (isDown) {
        $i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
    } else {
        $i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
    }
})






