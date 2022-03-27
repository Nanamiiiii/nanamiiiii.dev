FROM ubuntu:20.04

RUN apt update && apt install -y tzdata curl gnupg 
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install -y build-essential git nodejs npm yarn
RUN npm install n -g
RUN n lts
RUN apt purge -y nodejs npm

WORKDIR /workspace/app
COPY ./app .
RUN yarn

