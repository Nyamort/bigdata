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
				_id: 'string',
				entry : 'string',
				categories : ['string'],
				createdAt : '1999-12-31T23:59:59Z',
				updatedAt : '1999-12-31T23:59:59Z',
				__v: 0
			},
			PostWithComments:{
				_id: 'string',
				entry : 'string',
				categories : ['string'],
				createdAt : '1999-12-31T23:59:59Z',
				updatedAt : '1999-12-31T23:59:59Z',
				__v: 0,
				comments: [
					{
						_id: 'string',
						comment: 'string',
						createdAt: '1999-12-31T23:59:59Z',
						updatedAt: '1999-12-31T23:59:59Z',
						__v: 0
					}
				]
			},
			CreateCommentRequest:{
				$text : 'string',
			},
			Comment:{
				_id: 'string',
				text : 'string',
				createdAt : '1999-12-31T23:59:59Z',
				updatedAt : '1999-12-31T23:59:59Z',
				__v: 0
			},
			UpdateCommentRequest:{
				$text : 'string',
			}
		}

	}

}
swaggerAutogen(outputFile, endpointsFiles, config).then(r => {
	console.log(r)
})
