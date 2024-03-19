const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app/routes/products.js']

swaggerAutogen(outputFile, endpointsFiles).then(r => {
	console.log(r)
})
