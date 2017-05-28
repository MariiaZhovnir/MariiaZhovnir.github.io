(function() {
  'use strict';

  var test = {
    data: {
      title: 'Тест по программированию',
      questions: [
        {
          title: 'Вопрос №1',
          answers: ['Вариант овтета №1', 'Вариант овтета №2', 'Вариант овтета №3']
        },
        {
          title: 'Вопрос №2',
          answers: ['Вариант овтета №1', 'Вариант овтета №2', 'Вариант овтета №3', 'Вариант овтета №4']
        },
        {
          title: 'Вопрос №3',
          answers: ['Вариант овтета №1', 'Вариант овтета №2']
        }
      ]
    },
    createTest: function() {
      var testContainer = createTestContainer (),
          title = createTestTitle (),
          questionBlock = createQuestionBlock (),
          button = createButton ();

      testContainer.appendChild(title);
      testContainer.appendChild(questionBlock);
      testContainer.appendChild(button);

      return testContainer;

      // createTestContainer
      function createTestContainer() {
        var container = document.createElement('form');
        container.classList.add('questions__form');
        container.setAttribute('action', '#');

        return container;
      }

      // createTestTitle
      function createTestTitle() {
        var title = document.createElement('h1');
        title.classList.add('title');
        title.appendChild(document.createTextNode(test.data.title));

        return title;
      }

      // createQuestionBlock
      function createQuestionBlock() {
        var container = document.createElement('ul');
        container.classList.add('questions');

        for (var i = 0, max = test.data.questions.length; i < max; i++) {
          var li = document.createElement('li'),
          questionName = document.createElement('h2'),
          answersList = document.createElement('ul');

          li.classList.add('questions__item');

          questionName.classList.add('questions__item--name');
          questionName.appendChild(document.createTextNode(test.data.questions[i].title));

          answersList.classList.add('answers');

          for (var j = 0, answersNumber = test.data.questions[i].answers.length; j < answersNumber; j++) {
            var liAnswer = document.createElement('li'),
            input = document.createElement('input'),
            label = document.createElement('label');

            liAnswer.classList.add('answers__item');
            // label
            label.classList.add('check');
            label.appendChild(document.createTextNode(test.data.questions[i].answers[j]));
            // input
            input.classList.add('answers');
            input.setAttribute('type', 'checkbox');
            input.setAttribute('name', 'name');
            input.setAttribute('value', 'yes');
            answersList.appendChild(liAnswer);
            liAnswer.appendChild(input);
            liAnswer.appendChild(label);
          }
          container.appendChild(li);
          li.appendChild(questionName);
          li.appendChild(answersList);

        }

      return container;
      }

      // createButton
      function createButton() {
        var container = document.createElement('div'),
        button = document.createElement('button');

        container.classList.add('test-check');

        button.classList.add('test-check__button');
        button.setAttribute('type', 'submit');
        button.setAttribute('name', 'resaltsButton');
        button.setAttribute('id', 'resaltsButton');

        button.appendChild(document.createTextNode('Проверить мои результаты'));

        container.appendChild(button);

        return container;
      }
    },
    magic: function() {
      var container = document.querySelector('#root');

      container.appendChild(this.createTest());
    }
  };
  test.magic();
})();
