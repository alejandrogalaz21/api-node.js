FROM node:14-alpine

# Install backend dependencies
WORKDIR /opt/app/api

# Copy package.json and yarn.lock
COPY ./package*.json ./
COPY ./yarn.lock ./
COPY ./.babelrc ./

# Install production dependencies
RUN yarn 

# Build api
# Transpile the source code using Babel
RUN npm run build

# Remove client source code and create package directory
# RUN rm -rf /opt/app/spa
# Run app
CMD [ "node", "dist/index.js" ]