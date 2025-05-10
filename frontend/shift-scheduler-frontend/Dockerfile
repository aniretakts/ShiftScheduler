# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY .. .

# Build the app
RUN npm run build

# Serve the app with a simple static server
RUN npm install -g serve
CMD ["serve", "-s", "dist"]

EXPOSE 3000
