FROM docker.io/library/node

LABEL name="APISAINTSEIYA"

LABEL version=0.1

LABEL maintainer="M. Abreu"

ENV APP_PORT_EXPOSE=4000

EXPOSE 4000

COPY . /APISAINTSEIYA/

WORKDIR /APISAINTSEIYA/

RUN npm install -g npm@latest sequelize-cli@latest 
RUN npm i 
RUN npx sequelize db:create || true
RUN npx sequelize db:migrate

ENTRYPOINT ["npm", "run", "debug"]