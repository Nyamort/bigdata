const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app/routes/posts.js']
const config = {
	info: {
		title: 'API Documentation',
		description: 'API Documentation for the blog post app',
	},
	components:{
		schemas:{
			CreatePostRequest:{
				$entry : 'string',
				$categories : ['string']
			},
			UpdatePostRequest:{
				$entry : 'string',
				$categories : ['string']
			},
			Post:{
				id: 'string',
				$entry : 'string',
				$categories : ['string']
			}
		}

	}

}
swaggerAutogen(outputFile, endpointsFiles, config).then(r => {
	console.log(r)
})
