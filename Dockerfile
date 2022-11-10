FROM node:16-alpine
ENV NODE_ENV=production
ENV PORT=${PORT}
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE ${PORT}
RUN chown -R node /app
USER node
CMD ["npm", "start"]