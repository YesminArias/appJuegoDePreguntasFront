appJuegoDePreguntasFront

consultar primero repositorio Backend
`https://github.com/YesminArias/appJuegoDePreguntas`

Presento App de Juego de preguntas realizado con Springboot y lenguaje Java, y en el Front React para iniciar el juego se debe crear una base de datos en PosgreSQL llamada questions con la siguiente configuracion

```
spring.datasource.hikari.connectionTimeout=20000
spring.datasource.hikari.maximumPoolSize=5
## PostgreSQL
spring.datasource.url=jdbc:postgresql://localhost:5432/questions
spring.datasource.username=postgres
spring.datasource.password=1234
spring.jpa.show-sql=true
#drop n create table again, good for testing, comment this in production
spring.jpa.hibernate.ddl-auto=create

```

POST
utilizando el siguiente endPoint se crearan el repositorio de las preguntas

` http://localhost:8080/question`

en el endPoint copiar y pegar el siguiente json para enviarlo como body

body
```
[{
    "id": "1",
    "question": "Cual es la capital de colombia?",
    "level": "1",
    "answers": [
        "Bogota",
        "Medellin",
        "Cali",
        "Cucuta" 
    ],
    "correctAnswer": "Bogota"
},
{
    "id": "2",
    "question": "Cual es la capital de venezuela?",
    "level": "1",
    "answers": [
        "Caracas",
        "Maracaibo",
        "Carabobo",
        "Zulia" 
    ],
    "correctAnswer": "Caracas"
},
{
    "id": "3",
    "question": "Cual es la capital de peru?",
    "level": "1",
    "answers": [
        "Quito",
        "Madrid",
        "Bogota",
        "Punta cana" 
    ],
    "correctAnswer": "Quito"
},
{
    "id": "4",
    "question": "Cual es la capital de ecuador?",
    "level": "1",
    "answers": [
        "Bogota",
        "San Andres",
        "Quito",
        "Guayaquil" 
    ],
    "correctAnswer": "Quito"
},{
    "id": "5",
    "question": "Cual es la capital de chile?",
    "level": "1",
    "answers": [
        "Arica",
        "Santiago",
        "Temuco",
        "Islas Malvinas" 
    ],
    "correctAnswer": "Santiago"
},
{
    "id": "6",
    "question": "Radamel Falcao es un jugador de:?",
    "level": "2",
    "answers": [
        "Basquetball",
        "Futbol",
        "Domino",
        "Videojuegos" 
    ],
    "correctAnswer": "Futbol"
},
{
    "id": "7",
    "question": "Rene HIguita fue famoso por la jugada de: ?",
    "level": "2",
    "answers": [
        "El meneito",
        "El monazo",
        "El escorpion",
        "La carreta" 
    ],
    "correctAnswer": "El escorpion"
},
{
    "id": "8",
    "question": "Nairo Quintana participa en el siguiente deporte:",
    "level": "2",
    "answers": [
        "Natacion",
        " Bolas criollas",
        "Ciclismo",
        "Bolas criollas" 
    ],
    "correctAnswer": "Ciclismo"
},
{
    "id": "9",
    "question": "Mariana Pajon es campeona mundial de?",
    "level": "2",
    "answers": [
        "Pelea de pulgares",
        "Guerra de almohadas",
        "Bmx",
        "Ciclismo" 
    ],
    "correctAnswer": "Bmx"
},
{
    "id": "10",
    "question": " En el lanzamiento de Jabalina, se lanza una ?",
    "level": "2",
    "answers": [
        "Jabalina",
        "nabaja",
        "Lanza",
        "Jaiba" 
    ],
    "correctAnswer": "Jabalina"
},
{
    "id": "11",
    "question": "de que estn hechas las uñas?",
    "level": "3",
    "answers": [
        "Colageno",
        "Queratina",
        "Cartilago",
        "Nistatina" 
    ],
    "correctAnswer": "Queratina"
},
{
    "id": "12",
    "question": " en condiciones nomales cuanto tiempo puede vivir una persona sin beber agua?",
    "level": "3",
    "answers": [
        "1 a 2 dias",
        "3 a 5 dias",
        "5 a 8 dias",
        "mas de 10 dias" 
    ],
    "correctAnswer": "3 a 5 dias"
},
{
    "id": "13",
    "question": " cuantos huesos tiene un pie de una persona adulta?",
    "level": "3",
    "answers": [
        "18",
        "25",
        "22",
        "52" 
    ],
    "correctAnswer": "52"
},{
    "id": "14",
    "question": "como se llaman los movimientos del corazon?",
    "level": "3",
    "answers": [
        "Diastole y Sistole",
        "Diastole y Suspiro",
        "Inhalar y exhalar",
        "Pum Y Pam" 
    ],
    "correctAnswer": "Diastole y Sistole"
},{
    "id": "15",
    "question": "cuantos dientes tiene una persona adulta?",
    "level": "3",
    "answers": [
        "34",
        "30",
        "36",
        "32" 
    ],
    "correctAnswer": "32"
},
{
    "id": "16",
    "question": " quien salvo a la tierra de ser destruida y fue revivido con las esferas del dragon?",
    "level": "4",
    "answers": [
        "Vegeta",
        "Pikolo",
        "Goku",
        "Yamcha" 
    ],
    "correctAnswer": "Goku"
},
{
    "id": "17",
    "question": "Como conocio Goku a Milk?",
    "level": "4",
    "answers": [
        "Entrenando con el maestro Roshi",
        "En un torneo de artes marciales",
        "Mientas Goku estaba de pezca",
        "Cuando Goku salvo a milk de un ataque de Dinosaurio" 
    ],
    "correctAnswer": "En un torneo de artes marciales"
},
{
    "id": "18",
    "question": "Como de llama la camara ubicada en el templo de kamisama donde entrenan Goku y sus amigos?",
    "level": "4",
    "answers": [
        "Camara de Kamisama",
        "Camara del Dragon",
        "Camara Secreta",
        "Camara del tiempo" 
    ],
    "correctAnswer": "Camara del tiempo"
},
{
    "id": "19",
    "question": "como se llama el ejercito al cual pertenecia el creador de los Androides 17 y 18?",
    "level": "4",
    "answers": [
        "Ejercito malvador",
        "Patrulla revoltosa",
        "Ejercito revoltoso",
        "Patrulla Roja" 
    ],
    "correctAnswer": "Patrulla Roja"
},
{
    "id": "20",
    "question": "como se llama el papa de Goku?",
    "level": "4",
    "answers": [
        "Radix",
        "Frizeer",
        "Bardock",
        "Roshi" 
    ],
    "correctAnswer": "Bardock"
},
{
    "id": "21",
    "question": "Cuál es el lenguaje estándar específico para aplicar estilos de presentación a nuestras páginas web?",
    "level": "5",
    "answers": [
        "Javascript",
        "Flash",
        "CSS",
        "Java" 
    ],
    "correctAnswer": "CSS"
},
{
    "id": "22",
    "question": "Qué significa el acrónimo HTML?",
    "level": "5",
    "answers": [
        "Hyper Text Mask Language",
        "Hard Text Markup Language",
        "Hyper Text Markup Language",
        "Hard Text Mask Language" 
    ],
    "correctAnswer": "Hyper Text Markup Language"
},
{
    "id": "23",
    "question": "Qué etiqueta es correcta para indicar un salto de línea?",
    "level": "5",
    "answers": [
        "</br>",
        "<br/>",
        "<breakLine>",
        "<hr>" 
    ],
    "correctAnswer": "<br/>"
},
{
    "id": "24",
    "question": "Qué etiqueta es correcta para indicar un salto de línea?",
    "level": "5",
    "answers": [
        "</br>",
        "<br/>",
        "<breakLine>",
        "<hr>" 
    ],
    "correctAnswer": "<br/>"
},
{
    "id": "25",
    "question": "Qué etiqueta se usa para escribir una lista no ordenada?",
    "level": "5",
    "answers": [
        "<ol>",
        "<ul>",
        "<li>",
        "<list>" 
    ],
    "correctAnswer": "<ul>"
}

]
```

para poder correr la App (en Visual Studio Code)se debe correr el Front con React-redux y Node.js http://localhost:3000/ Para iniciar el juego encontraras una landinPage donde podras guardar el nombre del jugador e iniciar el juego de preguntas iniciara en el nivel 1 (Categoria 1 ) que consta de 5 preguntas sin embargo solo te saldra 1 aleatoria de las 5. son 5 categorias cada una de 5 preguntas con un total de 25 preguntas.

 al responder de forma correcta aumentaras de nivel y de esa manera se otorgara 20 puntos por cada pregunta correcta. si llegas a fallar terminara el juego. ● debes seleccionar una opción de 4 posibles.

podras salir del juego si deseas con el boton Salir tambien el sistema finaliza el juego porque no selecciono una pregunta correcta. al finalizar del juego te va a arrojar el puntaje.