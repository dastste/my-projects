
let form = document.querySelector('form');

form.addEventListener('invalid', (function () {
    return function (e) {
        e.preventDefault();
    }
    
})(), true);