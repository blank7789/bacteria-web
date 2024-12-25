let btn = document.querySelector('button')
let listWrapper = document.querySelector('ul')
let input = document.querySelector('input');


let text = '';
const parseJson = JSON.parse(localStorage.getItem("todo"))
const arr = parseJson || [];

const addTodo = () => {
    text = input.value;
    if (arr.length >= 0) {
        const newArr = arr.push({ id: Date.now(), text: text })
        const jsonParser = localStorage.setItem("todo", JSON.stringify(arr))
        let list = document.createElement('li')
        let btn = document.createElement('button')
        btn.innerHTML = 'delete'
        list.append(btn)
    }
}

const deleteTodo = (id) => {
    let list = document.createElement('li')
    let btn = document.createElement('button')
    btn.innerHTML = 'delete'
    list.append(btn)
    btn.addEventListener('click', () => {
        console.log('result');
        const result = arr.filter((items) => items.id !== id)
    })
}

const getTodo = () => {
    if (parseJson) {
        parseJson.forEach(item => {
            let list = document.createElement('li')
            let listWrapper = document.querySelector('ul')
            listWrapper.append(list)
            deleteTodo(item?.id)
            list.innerHTML += item?.text
        });
    }
}








window.addEventListener("DOMContentLoaded", getTodo)




btn.addEventListener('click', addTodo)




