[![Build status](https://ci.appveyor.com/api/projects/status/o14ll9i57m4r4q4m?svg=true)](https://ci.appveyor.com/project/Professor-Severus-Snape/ra-router-crud-frontend)

# CRUD

Вам необходимо реализовать CRUD при работе с HTTP с использованием Router.

Backend вы можете либо написать сами, либо взять готовый.

Нас интересует только ID, content и created, в качестве остальных значений вроде имени и фото, можете поставить заглушки.

## Общая механика

При нахождении на странице `/` отображается список существующих постов, GET на адрес http://localhost:7070/posts. Полученные данные отображаются в виде карточек:

![List](./pic/main.png)

Кнопка «Создать пост» ведёт на страницу добавления (см. ниже) `/posts/new`. Помните про регулярные выражения.

При клике на саму карточку происходит переход на страницу просмотра поста (см. ниже) `/posts/{postId}`.

### Страница создания

На странице создания `/posts/new` отображается карточка создания:

![New](./pic/new.png)

При нажатии на кнопку «Опубликовать» пост сохраняется, после чего осуществляется редирект на главную страницу. POST на адрес http://localhost:7070/posts body: `{"id": 0, "content": "То, что введено в поле ввода"}`.

При нажатии на крестик в верхнем правом углу происходит редирект на главную без сохранения.
Advanced: можете сохранить в localStorage и потом вытаскивать оттуда.

### Страница просмотра

На странице просмотра `/posts/{id}` отображается карточка просмотра:

![View](./pic/view.png)

При клике на кнопку «Удалить» происходит удаление поста, после чего осуществляется редирект на главную страницу. DELETE на адрес http://localhost:7070/posts/{id}.

При клике на кнопку «Редактировать» карточка просмотра заменяется карточкой редактирования:

![Edit](./pic/edit.png)

На карточке редактирования:
* кнопка «Сохранить» приводит к сохранению поста и отображению карточки просмотра с обновлёнными данными. POST на адрес http://localhost:7070/posts body: `{"id": не 0, "content": "То, что введено в поле ввода"}`;
* кнопка «Крестик» приводит к возврату к карточке просмотра.

**Важно**:

* React Router позволяет использовать регулярные выражения в роутах: https://github.com/pillarjs/path-to-regexp/tree/v1.7.0.