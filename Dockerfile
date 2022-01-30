FROM node:16 as base

WORKDIR /undefined
COPY package*.json ./

RUN npm install --legacy-peer-deps
COPY . .

FROM base as serve
EXPOSE 9000
CMD ["npm", "run", "serve"]
