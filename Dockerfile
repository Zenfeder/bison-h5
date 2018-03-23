FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

ENV NODE_ENV=test

COPY . .

EXPOSE 8080

RUN npm install
RUN npm run build

CMD ["npm", "start"]