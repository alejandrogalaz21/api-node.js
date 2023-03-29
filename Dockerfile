FROM node:14-alpine

# Install backend dependencies
WORKDIR /opt/app/api

# Copy package.json and yarn.lock
COPY . .
# Install production dependencies
RUN yarn 

# Build api
RUN yarn run build

# Remove client source code and create package directory
# RUN rm -rf /opt/app/spa
# Run app
CMD [ "yarn", "start:build" ]