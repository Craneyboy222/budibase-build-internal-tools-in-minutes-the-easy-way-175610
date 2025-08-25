import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Enterprise Application API',
      version: '1.0.0',
      description: 'API documentation for the enterprise application',
    },
    servers: [
      {
        url: 'https://api.yourenterpriseapp.com',
      },
    ],
    components: {
      securitySchemes: {
        OAuth2: {
          type: 'oauth2',
          flows: {
            authorizationCode: {
              authorizationUrl: 'https://auth.yourenterpriseapp.com/authorize',
              tokenUrl: 'https://auth.yourenterpriseapp.com/token',
              scopes: {},
            },
          },
        },
      },
    },
    security: [{ OAuth2: [] }],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(options);
export default swaggerSpec;
