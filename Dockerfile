# Base image
FROM node:latest

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV DB_HOST=db
ENV DB_NAME=your_db_name
ENV DB_USER=your_db_user
ENV DB_PASSWORD=your_db_password

# Build app
RUN npm run build

# Start app
CMD ["npm", "start"]