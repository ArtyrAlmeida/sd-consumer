FROM node:alpine
WORKDIR /usr/app
COPY package.json ./
RUN npm run build
RUN npm install
COPY . .
EXPOSE 3030
CMD ["npm", "run", "dev"] 