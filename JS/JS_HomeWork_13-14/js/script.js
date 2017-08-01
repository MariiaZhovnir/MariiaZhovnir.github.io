var data = {
    title: 'Тест по какой-то теме',
    questions: [
        {
            title: 'Вопрос #1',
            answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3'],
            correctAnswers: [1]
        },
        {
            title: 'Вопрос #2',
            answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4'],
            correctAnswers: [1]
        },
        {
            title: 'Вопрос #3',
            answers: ['Вариант овтета 1', 'Вариант овтета 2'],
            correctAnswers: [1]
        }
    ]
};

/////////////////////////work with localStorage/////////////////////////////////////////////////////////////////////////
var serialData = JSON.stringify(data);

localStorage.setItem("testData", serialData);

var returnData = JSON.parse(localStorage.getItem("testData"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

parent = document.getElementById('container');


var source = document.getElementById('test').textContent,
    template = _.template(source, data);

parent.innerHTML += template(data);


var questionList = document.getElementsByClassName('question-item');

console.log(questionList);

console.log(questionList.length);

function getAnswers(arr) {
    return _.map(arr, function(item) {
        return item.checked;
    });
}

function findAnswers () {
    for (var k = 0; k < questionList.length; k++) {
        var index = k + 1;
        var questionAns = document.getElementsByName('question' + index);
        console.log(questionAns);
        var newArray = getAnswers(questionAns);
        console.log(newArray);
        for (var i = 0; i < newArray.length; i++) {
            var yourAns = newArray[i];
            if (yourAns === true) {
                if (newArray.indexOf(yourAns) == data.questions[k].correctAnswers) {
                    console.log(newArray.indexOf(yourAns));
                    console.log('CORRECT!');
                    document.getElementById('q'+(k+1)).innerHTML = 'Ответ правильный!';

                } else {
                    console.log('NOT CORRECT');
                    document.getElementById('q'+(k+1)).innerHTML = 'Ответ неправильный!';
                }
            }
        }
    }
}

var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    findAnswers();
    event.preventDefault();
});

function showModalWin() {

    var darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    var modalWin = document.getElementById('popupWin');
    modalWin.style.display = 'block';

    document
        .getElementById("ok")
        .addEventListener("click", function() {
            console.log('click');
            clearForm();
            darkLayer.parentNode.removeChild(darkLayer);
            modalWin.style.display = 'none';
        });
}

function clearForm() {
    var f = document.myForm;
    for(var i = 0; i < f.elements.length; ++i) {
        if(f.elements[i].checked)
            f.elements[i].checked = false;
    }
}