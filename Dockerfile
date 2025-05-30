FROM node:22-alpine
RUN mkdir ./app
WORKDIR /app
COPY . ./
RUN npm i
EXPOSE 8000
ENTRYPOINT ["node", "server.js"]
