import express from 'express';
import hbs from 'hbs';
import * as url from 'url';
import 'dotenv/config'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//crea una aplicacion express
const app = express()
const port = process.env.PORT;

//Se especifica el motor de plantilla a utilizar
app.set('view engine', 'hbs');

//Definicion de ruta a buscar los archivos ".hbs"
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    //renderizacion de plantillas hbs y envio de datos
    res.render('home', {
        nombre: 'Adrian Garcia',
        titulo: 'Curso de Node',
        showHeader: '',
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Adrian Garcia',
        titulo: 'Curso de Node',
        showHeader: 'alt',
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Adrian Garcia',
        titulo: 'Curso de Node',
        showHeader: 'alt',
    });
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})