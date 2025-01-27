# Step 1: Build Stage
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code and build the app
COPY src /app/src
RUN mvn clean package -DskipTests

# Step 2: Production Stage
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/*.jar /app/backend.jar

# Expose the application port
EXPOSE 8081

# Command to run the Spring Boot application
CMD ["java", "-jar", "/app/backend.jar"]
