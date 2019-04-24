# base image
FROM node:carbon

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

# start app
CMD ["npm", "start"]
