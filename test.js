<html>
  <head>
    <title>Mission 1</title>
    <meta charset="utf-8" />
  </head>

  <body>
    <div id="todo-list"></div>
    <div id="hero-wod-zeus"></div>
    <div id="todo-0521"></div>
    <script>
      let data = [
        {
          text: 'JS 공부하기',
          isCompleted: true,
        },
        {
          text: 'JS 복습하기',
          isCompleted: false,
        },
      ];

      let zeus = [
        {
          text: '3 Rounds For Time',
          isCompleted: false,
        },
        {
          text: '30 Wall Ball Shots (20/14 lb)',
          isCompleted: true,
        },
        {
          text: '30 Sumo Deadlift High-Pull (75/55 lb)',
          isCompleted: true,
        },
        {
          text: '30 Box Jump (20 in)',
          isCompleted: true,
        },
        {
          text: '30 Push Presses (75/55 lb)',
          isCompleted: true,
        },
        {
          text: '30 calorie Row',
          isCompleted: false,
        },
        {
          text: '30 Push-Ups',
          isCompleted: false,
        },
        {
          text: '10 Back Squats (Bodyweight)',
          isCompleted: false,
        },
      ];

      let data_0521 = [
        {
          text: '아침 닭가슴살, 샐러드',
          isCompleted: true,
        },
        {
          text: '샤워하면서 화장실 청소',
          isCompleted: true,
        },
        {
          text: '오전 공부 2시간',
          isCompleted: false,
        },
        {
          text: '비블럭 부수고 오기',
          isCompleted: true,
        },
        {
          text: '회식 때 술 적당히 먹기',
          isCompleted: true,
        },
        {
          text: '뻘 짓 하지 말고 일찍 자기',
          isCompleted: false,
        },
      ];

      function makeElement(id, el) {
        let html = document.createElement('ul');
        let chkbox = document.createElement('input');
        chkbox.setAttribute('type', 'checkbox');
        let text = document.createTextNode(el.text);
        let content = document.createElement('li');
        if (el.isCompleted === true) {
          content.style.textDecoration = 'line-through';
        }

        chkbox.addEventListener('click', () => {});

        content.appendChild(text);
        content.appendChild(chkbox);
        html.append(content);
        document.getElementById(id).innerHTML = html;
        // console.log(html);
        // console.dir(html);
      }

      function TodoList(id, data) {
        if (!new.target) {
          throw new Error('Function must be declared with "new" keyword');
        }
        if (Object.prototype.toString.call(data).slice(8, -1) !== 'Array') {
          throw new Error('Exceptional Parameter!!!');
        }

        this.state = data;

        this.render = function () {
          this.state.forEach((e) => makeElement(id, e));
        };

        this.setState = function (nextData) {
          this.state = nextData;
          this.render();
        };
      }

      const todoList = new TodoList('todo-list', data);
      const hero_wod_zeus = new TodoList('hero-wod-zeus', zeus);
      const todo_0521 = new TodoList('todo-0521', data_0521);
      todoList.render();
      hero_wod_zeus.render();
      todo_0521.render();

      setTimeout(() => {
        todoList.setState([
          {
            text: 'JS 복습하기',
            isCompleted: true,
          },
        ]);
      }, 2000);
    </script>
  </body>
</html>