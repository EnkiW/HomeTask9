const input = document.querySelector('#input');
const btn = document.querySelector('#btnClick');

btn.addEventListener('click', function () {
    alert(input.value)
})
const input2 = document.querySelector('#input2');
const btn2 = document.querySelector('#btnClick2');

btn2.addEventListener('click', function () {
    input2.value = 'Writing is useless'
})
