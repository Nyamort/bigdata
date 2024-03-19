const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app/routes/posts.js']

swaggerAutogen(outputFile, endpointsFiles).then(r => {
	console.log(r)
})
