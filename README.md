# Описание функционала

Фронтенд приложение для просмотра информации о звездных войнах. Используя [Star Wars API](https://swapi.dev/documentation) происходит получение данных и отрисовка карточек персонажей звездных войн. Есть три страницы - главная, каталог, 404. Функционирует динамическая подгрузка карточек, поиск через запрос на сервер, фильтрация на клиенте. Поиск осуществляется при вводе текста в поле, при этом применяется механизм debounce, чтобы запрос не отправлялся на каждое нажатие. Клик по карточке персонажа открывает модальное окно с подробной информацией. Для компонента карточки написаны тесты.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Использованные технологии

Проект создан с помощью Create React App.
Использованы TypeScript, React, Redux, Axios, Testing Library.

## Доступные скрипты

Для запуска приложения его необходимо скачать и запустить `npm install`. После установки зависимостей можно использовать следующие команды:

### `npm start`

Запуск приложения. Открыть в браузере по адресу [http://localhost:3000](http://localhost:3000).

### `npm test`

Запуск тестов.

### `npm run build`

Запуск сборки и сохранение оптимизированных и минифицированных файлов в папку `build`.

### `npm run eject`

Эту команду нельзя отменить. Не запускайте ее, если не понимаете точно, что вы делаете.

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
