FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nuxt
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start-master"]