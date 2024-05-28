import http from 'http';
import { type } from 'os';

http.createServer( (req, res) => {

    res.write('Hola mundo');
    res.end();
})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);