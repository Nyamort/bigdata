FROM node:21-alpine

WORKDIR /app

EXPOSE 3000

CMD ["npm", "start"]
