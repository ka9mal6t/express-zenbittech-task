FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma migrate deploy

RUN npm run build

EXPOSE 4200

CMD ["npm", "run", "dev"]
