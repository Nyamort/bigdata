const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app/routes/posts.js']
const config = {
	info: {
		title: 'API Documentation',
		description: 'API Documentation for the blog post app',
	}
}

swaggerAutogen(outputFile, endpointsFiles, config).then(r => {
	console.log(r)
})
