FROM node:15.14.0
RUN npm install -g npm@7.9.0
RUN mkdir /app_node
WORKDIR /app_node
ADD . /app_node
#RUN npm install ejs
RUN npm install
RUN npm install ejs
RUN npm install dotenv
RUN npm install mongoose

EXPOSE 3000
EXPOSE 3001
CMD [ "npm", "start" ]