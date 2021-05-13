# syntax=docker/dockerfile:1
 FROM node:12-alpine
 WORKDIR /backend
 COPY ["package.json", "package-lock.json*", "./"]
 RUN npm install --production
 COPY . .
 EXPOSE 5000
 CMD ["npm","run","start","--port 5000"]
