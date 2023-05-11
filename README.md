## https://rick-morty-app-coral-nu.vercel.app/
## Проэкт создан в учебных целях

## Stack:
- [base] ***ReactJS***
- [routing] ***React-Router***
- [state managment] ***Zustand + React Query (TanStack Query v3)***
- [form] ***React-hook-form***
- [compiler] ***Es-build+RollupJS(VITE)***
- [typing] ***TypeScript***
- [auth-service] ***Firebase***
- [CSS preproc] ***SASS + styles.modules***
- [API] ***https://rickandmortyapi.com/***
- [another libr] ***Classnames, generate-react-cli, react-icons***

## Цели проэкта:

1. Изучить работу React Query, он же TanStack query v4, больше погрузиться в специфику обработки данных на backend'e с последующим получением на клиент. В самом проэкте использовал только useQuery() для получения данных с сервера. Так же доступные удобста аля isError, isLoading, isSuccess для обработки соответствующих событий. <br> Что касается useMutation() пришлось пару тройку часов по играться с JSON-server и базу вроде как усвоил. Очень интересная (Но не до конца понятная) работа с кэшированием данных, пробовал так же при мутации сразу кешировать отправляемые на сервер данные, и того -1 запрос на сервер, правда через время указанное в параметре staleTime запрос все равно отправляется дабы актуализировать информацию server - client.
<hr>

2. ***Zustand*** - Так же не упустил возможность паралельно по играться с новым state manager'ом:
Модульная архитектура идея не новая, и в том числе модульным у нас может быть и ***store***, так же подходит и к стилю написания проектов разбитых на так называемые фичи ***Feature***. ReactQuery к слову этим архитектурным решениям не протеворечит. <br>
Итак: <br>

  - ***userStore.ts*** - Использую для хранения авторизационной информации, тут же и соответствующие методы(ну или редьюсеры по редаксовски =)). В дальнейшем данный store можно расширять и для хранения личной информации по User'aм и методы редоктирования этой информации тоже можно поместить здесь, смена пароля, аватарки и прочие, я же просто пока сделал задел на profile panel.
Так же при введении неверного логина или пароля ошибка приходящая с firebase обрабатывается и добавляется в этот же store, ну и используется как флаг для всплывающего валидирующего сообщения. 
  - ***favoritesStore*** - Это вместилище для избранного, что примечательно добавление в избранное сделал асинхронным с обработкой ошибок, и соответсвующими полями в store. Т.е character которого мы "За фаворитили" Приходит с сервера, добавляется в store, и уже наш favorite array выводится на странице favorites. Удаление по старинке, просто фильтруем имеющийся массив, ну и count не забываем менять.  <br>
  - В целом идея и принцип работы Zustand мне понравился, в частности middlewares которыми можно обернуть в композицию наш store. Как кастомные так и встроенные(Persist, Immer уже под капотом). С TypeScrip больших проблемм не было, в доке на github все описанно. 
<hr>
3. Продолжил погружатся в react-hook-form. На этот раз еще усложнил себе задачу, сделал контролируем кастомные Input'ы обернул все Controller. В этот же кастомный UI Input добавилполе для ошибок и сделал абсолютное расположение, добавил динамический класс, по которому еще и тень на красную менял и outline c темотического зеленого на красный, в том числе и при фокусе. 
Авто-фокус на email Input сделал по ref. Ну и так же опробовал выносить валидацию все в отдельный файл, в котором все и описывал, кастомизация валидации так сильно возрастает учитывая возможности react-hook-form, в общем хорошая практика. Validation по регулярке проверка email. Все поля required. Колличество символов в пароле, ну и disabled Button при ошибке, так же всю обработку скинул на кастомный компонент Button(То есть в любой форме ее переиспользуешь, только errors передаешь из useForm() и кнопка уже валидирована!)


## Вывод:
- Цели поставленные на проект более чем выполнены:
- C ReacrQuery нужно просто больше практики на нормальном backend'e
- Zustand - нужно проверять на серьезных, больших проектах, только так можно понять все глубинные проблемы библиотеки, но я пока только учусь =) 
- TypeScript становится все лучше, уже не плохо ориентируюсь в том как, что типизировать, И даже начинаю привыкать к бонусам TS.
- По мере возможности проект буду до пиливать...

## TODO:
1. Animation?
2. Adaptive?
3. Accessability
4. Memoization?
