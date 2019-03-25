
// --------------------------------------------------------
//
//
// --------------------------------------------------------

// --------------------------------------------------------
// --------------------------------------------------------
const assert = require ('assert') ;

const request = require ('request') ;

// --------------------------------------------------------
// --------------------------------------------------------
const IP_PUERTO="http://localhost:8080" ;

// --------------------------------------------------------
// main ()
// --------------------------------------------------------

//
//
//
describe( "Test 2 (GET zona)", () => {

	// ....................................................
	//
	// ....................................................
	it( "pruebo GET /zona/marjal", ( hecho ) => {

		request.get ( // peticion: GET
			{
				url: IP_PUERTO+"/zona/marjal", 
				headers: {
					'User-Agent': 'jordi',
				},
			},
			// callback para cuando llegue respuesta
			 (err, response, body) => {

				if (err){
					console.log("SIUUU"+err) ;
				}

				assert.equal( err, null, "¿error no vale null? " + err )
				assert.equal( response.statusCode, 200, "¿respuesta no es 200?" )

				console.log (" ----- respuesta a GET /zona/marjal ---- ")
				// console.log ("       response = " + JSON.stringify(response))
				console.log ("       bodyyyy = " + body)
				console.log (" -------------------------------- ")

				var datosZona = JSON.parse( body );

				var nombre = JSON.stringify(`${datosZona[0].nombre}`);

				var nombreZona = JSON.parse(nombre);

				console.log(nombreZona) ;

				//assert.equal(nombreZona, "marjal")

				//
				//
				//
			
			}
		) // get
		hecho () ;
	}) // it


}) // describe 

