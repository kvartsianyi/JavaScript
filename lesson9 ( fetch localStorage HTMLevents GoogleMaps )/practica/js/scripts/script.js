
//     Завантажити з мережі будь-який шаблон сайту.
//     Підключити до нього свій скріпт-файл.
//     У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// - знайти всі div та змінити ім колір на червоний

// all elements with id
let allId = document.querySelectorAll('[id]');
console.log(allId);


// all p text changed to hello oktenweb!
let allP = document.getElementsByTagName('p');

for (let i = 0; i < allP.length; i++) {
    allP[i].innerText = 'hello oktenweb!';
}


// all div`s color changed to red
let allDiv = document.getElementsByTagName('div');

for (let i = 0; i < allDiv.length; i++) {
    allDiv[i].style.backgroundColor = 'red';
}

