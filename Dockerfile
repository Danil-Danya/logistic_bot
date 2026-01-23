FROM node:24-alpine


RUN apk update && \
    apk add --no-cache postgresql-client libpq

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]

