# ImpossibleFox

### If you don't understand what it says, use a translator. I will try to make a description in English as soon as possible.

--------

### Простая и быстрая однострочная тема в ванильной стилистике Firefox, максимально приближенная к так называемому "компактому режиму" браузера Safari



# Особенности
 - Так как реализовать адресную строку, встроенную внутрь вкладки на одном лишь css невозможно, тут применяется [fx-autoconfig](https://github.com/MrOtherGuy/fx-autoconfig) для внедрения javascript кода.
 - Я только начал изучать javascript, и не полностью понимаю код, который я скопировал с [треда](https://www.reddit.com/r/FirefoxCSS/comments/nv1lb6/url_on_the_tab_like_the_new_safari/) на Reddit, а потому пока что не могу пофиксить некоторые баги.
 - Поисковые предложения ( подсказки, основанные на запросе, введённом на новой вкладке ) не поддерживаются. Возможно, что их можно как-то прикрутить с помощью javascript, но я ещё не настолько крут, чтобы это реализовать.



# Фишки
- ***Однострочность***  
   Все элементы управления браузером находятся в одной строке, что позволяет сэкономить кучу вертикального пространства и отдать его под сайты.
  
   ![изображение](https://github.com/Naezr/ImpossibleFox/assets/95460152/7edee538-caad-4d96-bf42-9f0f3b99a161)

- ***Многострочность***  
   Как бы это противоречиво не звучало, но эта тема одновременно однострочная и многострочная. Потому что если вы откроете много вкладок или наделаете много закладок, то они распределятся по нескольким строкам.
  
   ![изображение](https://github.com/Naezr/ImpossibleFox/assets/95460152/e9ee5ae0-2af2-4de0-9ff6-c252feb11e14)

- ***Адресная строка***  
   Адресная строка встроена прямо в активную вкладку. Это настолько невероятная фича, что кроме какого-то чела с реддита никто не смог качественно её реализовать и сделать на её основе тему. Спасибо челу с реддита.
  
   ![изображение](https://github.com/Naezr/ImpossibleFox/assets/95460152/7e92e8ad-83d1-41e4-99f9-1c24b9da7c75)

- ***Компактность***  
   Максимум пространства единственной строки интерфейса браузера отдано под самое важное - вкладки. А адресная строка встроена в активную вкладку и вообще не отбирает столь ценное пространство.

- ***Ванильность***  
   Тема лишь грамотно двигает кнопочки, не затрагивая основной дизайн-код браузера.

- ***Настраиваемость и открытость***  
   При желании вы можете как угодно редактировать код темы, самостоятельно двигать кнопочки, и предлагать новые идеи и исправления.

# Установка

Для начала вам понадобится установить [fx-autoconfig](https://github.com/MrOtherGuy/fx-autoconfig). Инструкции по установке вы найдёте на странице проэкта.

После этого перейдите на страницу `about:config` в вашем браузере и измените следующие параметры:
 - `toolkit.legacyUserProfileCustomizations.stylesheets` => `True`
 - `browser.urlbar.maxRichResults` => `0`

Не забудьте нажать галочку при изменении числового значения и перезапустите браузер.

Далее [скачайте](https://github.com/Naezr/ImpossibleFox/releases) последнюю версию *НевозможноЛиса* и скопируйте файлы из архива в папку своего профиля.

После этого вы можете настроить расположение кнопок, например вот так:

![изображение](https://github.com/Naezr/ImpossibleFox/assets/95460152/c7863a53-24bb-4734-ab36-75ee3f4f92f6)

Не оставляйте на панели навигации ( она самая нижняя ) и в расширенном меню никаких кнопок, этой панели всё равно не видно. Кнопки `назад`, `вперёд`, `загрузки`, `расширения` и `меню` заскриптованы, так что как бы вы их не дёргали, при перезапуске браузера они вернутся на место. Также на место вернётся и кнопка создания новой вкладки, ведь после взаимодействия с редактором она оказалась справа.

----------

# Благодарность
 - [MrOtherGuy](https://github.com/MrOtherGuy)   За fx-autoconfig и репозиторий с прикольными css'ками.  
 - [Firefox-Alpha](https://github.com/Tagggar/Firefox-Alpha)   Этот проэкт вдохновил меня на создание этой темы. Там адресная строка тоже втроена во вкладку, но менее удобно.  
 - [Чел с реддита](https://www.reddit.com/r/FirefoxCSS/comments/nv1lb6/url_on_the_tab_like_the_new_safari/)   Без его кода на javascript ничего бы не получилось.  
