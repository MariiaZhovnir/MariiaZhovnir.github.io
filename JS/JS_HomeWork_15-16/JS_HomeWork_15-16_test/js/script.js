function Test() {
    this.titleTest ='Название теста';
    this.question = 'Вопрос №1';
    this.answers = [
        {name: 'Вариант ответа №1', flag: false},
        {name: 'Вариант ответа №2', flag: false},
        {name: 'Вариант ответа №3', flag: false},
        {name: 'Вариант ответа №4', flag: false}
    ]
}

Test.prototype = new Test();
var newTest = new Test();
var myTest = [];

var title = document.getElementById('title');
var question = document.getElementById('question');
var answers = document.getElementsByClassName('answers');
var correctAnswer = document.getElementsByClassName('correctAnswer');
var checkedCorrectAnswer = false;
var saveButton=document.getElementById('save');

saveButton.addEventListener('click',function () {
    newTest.titleTest = title.value;
    newTest.question = question.value;
    for (var i = 0; i < answers.length; i++) {
        newTest.answers[i].name = answers[i].value;
        checkedCorrectAnswer = correctAnswer[i].checked;
        if (checkedCorrectAnswer === true) {
            newTest.answers[i].flag = true;
        } else {
            newTest.answers[i].flag=false;
        }
    }

    myTest.push(newTest);

    title.value='';
    question.value='';
    for (var n = 0; n < answers.length; n++) {
        answers[n].value = '';
        correctAnswer[n].checked = false;
    }
});
// console.log(myTest);

var result=document.getElementById('result');
result.addEventListener('click', function () {
    var transformTest = JSON.stringify(myTest);
    localStorage.setItem("myKeyTest", transformTest);
    var returnTests = JSON.parse(localStorage.getItem("myKeyTest"));
    for (var k = 0; k < returnTests.length; k++) {
        console.log('Test title: ' + returnTests[k].titleTest);
        console.log('Question ' + (k+1) + ': ' + returnTests[k].question);
        console.log(returnTests[k].answers);
    }
});
