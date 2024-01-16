# Use the official Node.js image with Alpine Linux
FROM node:14-alpine

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3300

# Command to run the application
CMD ["npm", "start"]