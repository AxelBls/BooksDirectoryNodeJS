FROM ubuntu

RUN apt-get update
RUN apt-get -y install curl
RUN curl --silent --location https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get -y install nodejs
RUN echo "Node: " && node -v
RUN echo "NPM: " && npm -v
COPY package.json .
RUN npm install
ADD config /opt/config
ADD controllers /opt/controllers
ADD models /opt/models
ADD routes /opt/routes
COPY server.js /opt

ENTRYPOINT npm start