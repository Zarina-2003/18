let form = document.forms.register
let inputs = form.querySelectorAll('.fill')
let NotFill = form.querySelectorAll('.nofill')
let prop = document.querySelectorAll('.propus')
let success = document.querySelector('.success-text')
let error = document.querySelector('.error-text')
let fill = 0
let nofill = 0
let pattern = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    phone: /^100|[1-9]?\d$/,
    mom_name: /^[a-z ,.'-]+$/i,
    pap_name: /^[a-z ,.'-]+$/i,
    car: /^[a-z ,.'-]+$/i,
    age: /^100|[1-9]?\d$/,
    about: /^[a-z ,.'-]+$/i,
    Email: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
    JAVA: /^[a-z ,.'-]+$/i,
    HTML: /^[a-z ,.'-]+$/i,
    CSS: /^[a-z ,.'-]+$/i
}

form.onsubmit = (event) => {
    event.preventDefault()

    let ISError = false
    inputs.forEach(inp => {
        if (inp.classList.contains('invalid') || inp.value.length === 0) {
            ISError = true
            nofill++
            inp.classList.add('invalid')

            let lab = inp.parentNode.querySelector('.propus')
            let icon = inp.parentNode.querySelector('img')
            lab.innerHTML = 'Need to fill ' + inp.name
            icon.style.opacity = '1'
        } else if (inp.classList.contains('valid')) {
            fill++
        }
    })
    NotFill.forEach(inp => {
        if (inp.classList.contains('invalidnofill')) {
            ISError = true
            nofill++
            inp.classList.add('invalidnofill')
            let icon = inp.parentNode.querySelector('img')
            icon.style.opacity = '1'
        } else if (inp.classList.contains('validnofill')) {
            fill++
        }

    })
    if (ISError === false) {
        submit()
    } else {
        alert('error')
    }
    success.innerHTML = fill
    error.innerHTML = nofill
    fill = 0
    nofill = 0
}


function submit() {
    let user = {
    }
    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })
    console.log(user);
}
function Fill(field, regex) {
    if (regex.test(field.value)) {
        field.classList.remove('invalid')
        field.classList.add('valid')
        if (field.value.length === 0) {
            field.classList.remove('invalid')
            field.classList.remove('valid')
            icon.style.opacity = '0'
        }
    } else {
        field.classList.remove('valid')
        field.classList.add('invalid')
        let icon = field.parentNode.querySelector('img')
        icon.style.opacity = '1'
        if (field.value.length === 0) {
            field.classList.remove('invalid')
            field.classList.remove('valid')
            icon.style.opacity = '0'

        }
    }
}
function NoFill(field, regex) {
    if (regex.test(field.value)) {
        field.classList.remove('invalidnofill')
        field.classList.add('validnofill')

        if (field.value.length === 0) {
            field.classList.remove('invalidnofill')
            field.classList.remove('validnofill')
        }
    } else {
        field.classList.remove('validnofill')
        field.classList.add('invalidnofill')
        let icon = field.parentNode.querySelector('img')
        icon.style.opacity = '1'
        if (field.value.length === 0) {
            field.classList.remove('invalidnofill')
            field.classList.remove('validnofill')
            icon.style.opacity = '0'

        }
    }
}
inputs.forEach(inp => {
    inp.onkeyup = () => {
        Fill(inp, pattern[inp.name])
    }
});
NotFill.forEach(inp => {
    inp.onkeyup = () => {
        NoFill(inp, pattern[inp.name])
    }
});


