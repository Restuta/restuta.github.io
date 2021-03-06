---
layout: minimalistic
tags: private
title: Дилемма заключённого
permalink: /prisoners-dilemma
---
<style>
    blockquote {
      color: #919191;
      margin-bottom: 20px;
      margin-left: 30px;
      font-size: 1em;
      font-style: normal;
      padding: 0 0 0 20px;
      border-left: 3px solid #bbb;
    }
</style>
Классическая дилемма заключённого содержит 3 условия и два варианта действий для каждого заключённого. 

Действия: 

    свидетельствовать против, сотрудничать => предавать
    хранить молчание => молчать

Рассуждения из вики (заменил "свидетельствует" на "предаёт", чтобы легче было потом рассуждать), которые приводят к дилемме:

>Если партнёр молчит, то лучше его предать и выйти на свободу (иначе — 1 год тюрьмы). Если партнёр предаёт, то лучше тоже предать, чтобы получить 2 года (иначе — 3 года). Стратегия «предавать» строго доминирует над стратегией «молчать». Аналогично другой заключённый приходит к тому же выводу.

В наших терминах наоборот =):

    предавать => молчать (конфьюзинг ага =)
    молчать => рассказывать

### Теперь условия (из английской статьи, там они менее категоричные)

    А и Б молчат - оба получают по 1 году
    А молчит, Б предаёт – А получает 3 года, Б свободен
    А и Б предают - оба получают по 2 года

### Наши условия

    А и Б рассказывают - оба получают по 1 году
    А рассказывает, Б молчит – А получает 3 года, Б свободен
    А и Б молчат - оба получают по 2 года

Уточним А и Б, для нашего контекста:

    А => Я
    Б => все (другие, большинство и т.п., видимый круг знакомых)

Наш пример же жизненный, тут не два заключённых и не два рассказчика, тут ты vs общество.

В примере с тюрьмой всё очевидно, что 1 год хуже, чем 2 и т.п. В нашей ситуации не так всё очевидно.

Например, важно выяснить сложнее ли рассказать о плохом случае, если остальные молчат, чем когда остальные тоже рассказывают. Предположим, что сложнее (гипотеза 1), т.е. когда все вокруг трындят о выкидышах, то и самому легче сказать "да у меня тоже был" (ещё легче конечно вообще не говорить, гипотеза 2), вроде это разумно предположить, т.к. в клубе анонимных алкоголиков, когда все сидят в кругу, вроде же легче признать, что ты тоже алкоголик, когда многие вокруг признают. Если это верно, то можно оставить коэффициенты похожими на оригинальные (правда они будут инвертированы, там 3 это худшее, т.к. это годы в тюрьме, у нас 3 это лучшее, т.к. это ближе всего к норм состоянию):


    a) я молчу и все молчат
    b) я молчу, все рассказывают
    c) я рассказываю и все рассказывают
    d) я рассказываю и все молчат

">" означает "сложнее" или "легче" соответственно.

#### Гипотеза 1 (c > d)
О плохом случае рассказать сложнее, когда все молчат, чем когда все рассказывают.

#### Гипотеза 2 (b > c) (неодноначная)
О плохом случае рассказать сложне, чем умолчать, когда все рассказывают.

#### Гипотеза 3 (b > a)
Когда я молчу, мне легче когда все рассказывают, чем когда все молчат.

#### Гипотеза 4 (a < c) (самая неоднозначная)
Когда я молчу и все молчат, это тяжелее, чем когда я рассказываю и все рассказывают.

#### Гипотеза 5 (а > d) (вроде очевидная)
Когда я молчу и все молчат, это легче, чем когда я рассказываю и все молчат.

Исходя из этих гипотиз построим отношения:

    b > a
    b > c
    c > d
    a < c
    a > d

    b > c > a > d
    3 > 2 > 1 > 0


    a) я молчу и все молчат - 1
    b) я молчу, все рассказывают - 3
    c) я рассказываю и все рассказывают - 2
    d) я рассказываю и все молчат - 0

    T (награда когда я молчу, а все рассказывают) = 3
    R (награда за обоюдное молчание) = 1
    P (награда за обоюдное рассказывание)= 2
    S (награда когда я рассказываю, а все молчат) = 0

    T > R > P > S (не выполняется)

Если все молчат, то лучше молчать (1 > 0), если все рассказывают, то лучше молчать, (3 > 2).

---

Рассмотрим когда

#### Гипотеза 4 (a > c) 
Когда я молчу и все молчат, это легче, чем когда я рассказываю и все рассказывают.

    b > a
    b > c
    c > d
    a > c
    a > d

    b > a > c > d
    3 > 2 > 1 > 0

    a) я молчу и все молчат - 2
    b) я молчу, все рассказывают - 3
    c) я рассказываю и все рассказывают - 1
    d) я рассказываю и все молчат - 0

    |              | молчать | рассказывать |
    |--------------|---------|--------------|
    | молчать      |   R, R  |     S, T     |
    | рассказывать |   T, S  |     P, P     |


    T (награда когда я молчу, а все рассказывают) = 3
    R (награда за обоюдное молчание) = 2
    P (награда за обоюдное рассказывание)= 1
    S (награда когда я рассказываю, а все молчат) = 0
    T > R > P > S (выполняется)

Если все молчат, то лучше молчать (2 > 0), если все рассказывают, то лучше молчать, (3 > 1).

---

### Наша гипотеза

Теперь предположим, что мы говорим о конечной пользе, не о моментальной сложности, т.е. о выгоде как таковой. Тогда можно предположить, что о плохом случае рассказать выгоднее, чем умолчать, когда все рассказывают. Если выгода от облегчения перевешивает выгоду от изначального дискомфорта рассказывания. Это можно подкрепить примером с клубом алкоголиков, хотя сидеть и молчать, когда все признаются легче, чем решиться встать и сказать, тем не менее "снять гору с плеч" потенциально выгоднее, т.к. самочувствие должно улучшиться, после того как ты "встал и сказал, что тоже алгологик" (ну или в чем смысл этих клубов). Тогда:

#### Гипотеза 2 (c > b)
О плохом случае рассказать выгоднее, когда все рассказывают, чем умолчать.

#### Гипотеза 3 (b > a)
Когда я молчу, мне легче когда все рассказывают, чем когда все молчат.

#### Гипотеза 5 (а > d) (если польза от рассказывания не перевешивает дискомфорт)
Когда я молчу и все молчат, это выгоднее, чем когда я рассказываю и все молчат.

    a) я молчу и все молчат
    b) я молчу, все рассказывают
    c) я рассказываю и все рассказывают
    d) я рассказываю и все молчат

    c > b
    b > a
    a > d

    c > b > a > d

---проверим---

#### Гипотеза 4 (c > a)
Когда я рассказываю и все рассказывают это выгоднее, чем когда я молчу и все молчат

#### Гипотеза 1 (c > d)
Когда я рассказываю и все рассказывают это выгоднее, чем когда все молчат.

    a) я молчу и все молчат - 1
    b) я молчу, все рассказывают - 2
    c) я рассказываю и все рассказывают - 3
    d) я рассказываю и все молчат - 0

    c > b > a > d
    3 > 2 > 1 > 0

    T (награда когда я молчу, а все рассказывают) = 2
    R (награда за обоюдное молчание) = 1
    P (награда за обоюдное рассказывание)= 3
    S (награда когда я рассказываю, а все молчат) = 0

    T > R > P > S (не выполняется)

Если все молчат, то лучше молчать (1 > 0), если все рассказывают, то лучше рассказывать (3 > 2).
















