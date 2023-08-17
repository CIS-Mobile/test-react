FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

# COPY . . # not relevant when mounting a volume

CMD ["npm", "run", "start_safe"]
