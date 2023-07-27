FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

# Installing dependencies
COPY package*.json yarn*.lock ./ 


# Copying source files
USER node
COPY --chown=node:node . .

# Building app
#RUN npm run build
RUN yarn 
RUN yarn run build
EXPOSE 3000

# Running the app
CMD "yarn" "run" "start"