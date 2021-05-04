FROM node:15.14.0
RUN npm install -g npm@7.9.0
RUN mkdir /app_node
WORKDIR /app_node
ADD . /app_node
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]