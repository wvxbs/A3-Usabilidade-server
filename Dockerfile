FROM node:lts-alpine
ENV NODE_ENV=development
ENV API_PORT=${API_PORT}
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE ${API_PORT}
RUN chown -R node /app
USER node
CMD ["npm", "start"]
