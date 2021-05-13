# syntax=docker/dockerfile:1
 FROM node:12-alpine
 WORKDIR /frontend
 COPY ["package.json", "package-lock.json*", "./"]
 RUN npm install --production
 COPY . .
 EXPOSE 3000
 CMD ["npm","run","start","--port 3000"]

