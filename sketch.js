Cookies
The p5.js Editor uses cookies. Some are essential to the website functionality and allow you to manage an account and preferences. Others are not essential—they are used for analytics and allow us to learn more about our community. We never sell this data or use it for advertising. You can decide which cookies you would like to allow, and learn more in our Privacy Policy.


Allow All

Allow Essential
Arquivo
Editar
Esboço
Ajuda
Português
Olá, luana.lesnioski!



Auto-atualizar

Pong jogo 2
por luana.lesnioski


Arquivos do Esboço


i
nde
x
.html

p
5.collide2
d
.js

p
ont
o
.mp3

r
aquetad
a
.mp3

s
ketc
h
.js


s
tyl
e
.css

t
rilh
a
.mp3

sketch.js
Salvo: 14 dias atrás
1
//variáveis da bolinha
2
let xBolinha = 300;
3
let yBolinha = 200;
4
let diametro = 15;
5
let raio = diametro / 2 ;
6
​
7
//velocidade da bolinha
8
let velocidadeXBolinha = 6;
9
let velocidadeYBolinha = 6;
10
let raqueteComprimento = 10;
11
let raqueteAltura = 90;
12
​
13
//variáveis da raquete
14
let xRaquete = 5;
15
let yRaquete = 150;
16
​
17
//variáveis do oponente
18
let xRaqueteOponente = 585;
19
let yRaqueteOponente = 150;
20
let velocidadeYOponente;
21
​
22
let colidiu = false;
23
​
24
//placar do jogo
25
let meusPontos = 0;
26
let pontosDoOponente = 0;
27
​
28
//SonsDoJogo
Não há mensagens de Lint
Linha atuallinha 17

Terminal
Limpar

### p5.collide v0.7.3 ### 
​
Prévia
