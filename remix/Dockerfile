# # Use an official Node.js runtime as a parent image
# FROM node:18-alpine

# # Set the working directory in the container
# WORKDIR /usr/server/app

# # Copy package.json and package-lock.json (if available)
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Expose the port the app runs on (assuming 3000 for development)
# EXPOSE 3000

# # Command to run the development server
# CMD ["npm", "run", "dev"]
# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variables if needed
ENV HOST=0.0.0.0
ENV PORT=3000

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
