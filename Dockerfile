FROM docker.io/library/node

LABEL name="APISAINTSEIYA"

LABEL version=0.1

LABEL maintainer="M. Abreu"

ADD ./* /APISAINTSEIYA/

WORKDIR /APISAINTSEIYA/

RUN npm install -g npm@latest && npm i && npx sequelize db:create && npx sequelize db:migrate

ENTRYPOINT ["npm", "run", "debug"]