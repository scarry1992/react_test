# React

- 06.02
    - Добавлин конфиг стартовый webpack
    - Hello **name**
    - Class Component
    - Function Component(Компонент коментария разбитый на функции)
    - Basic Component(const Component = (<div>{name}</div>);)
    - Timer(Компонент является неизменяемым. Надо пересоздовать его, чтобы перерисовать)
- 07.02
    - Работа со State компонента
    - Работа со списками и выносом конструкций в jsx
    - Работа с событиями, их биндом в классах
    - Вынос условий в jsx
- 08.02
    - Примеры событий в компоненте(stageRenderComponent - цикл жизни компонента)
    - Работа с формами:
        - Простая форма с валидацией
        - Рефакторинг формы с использованием refs
- 10.08
    - Пример с общением между родителем и потомком через передачу callback
- 13.08
    - Рефакторинг кода и вынос всех компонентов в 1н корневой
    - Знакомство с роутингом в Реакте(для работы с вебпэком нужно прописать в devSever: {historyApiFallback: true})
    - Установка дочерних роутов
    - Работа с линками(IndexLink для того, чтобы не путать пути с корневым путем)
- 14.08
    - Роуты с параметрами(необязательные роуты заключаются в скобки, доступ к параметрам из шаблона осуществляется с помощью)
    - Ссылки с параметрами
- 24.08
    - PropTypes используется для валидации приходящих props(Тяжелая операция - лучше только для DEV)
    - Варианты использования:
        - Указывать примитив:
            - optionalArray: React.PropTypes.array,
            - optionalBool: React.PropTypes.bool,
            - optionalFunc: React.PropTypes.func,
            - optionalNumber: React.PropTypes.number,
            - optionalObject: React.PropTypes.object,
            - optionalString: React.PropTypes.string
        - Указать, что свойство может быть одним из списка примитивов:
            - optionalUnion: React.PropTypes.oneOfType([
                React.PropTypes.string,
                React.PropTypes.number,
                React.PropTypes.instanceOf(Message)
              ]),
        - Указать конкретную структуру объекта:
            - optionalObjectWithShape: React.PropTypes.shape({
                 color: React.PropTypes.string,
                 fontSize: React.PropTypes.number
              })
        - Указать обязательность параметра:
            - requiredAny: React.PropTypes.any.isRequired