# The first stage
# Build React static files
FROM node:13.12.0-alpine AS build

WORKDIR /app/frontend
COPY ./the-2hour-job-Frontend/package.json ./
COPY ./the-2hour-job-Frontend/package-lock.json ./
RUN npm ci --silent
COPY ./the-2hour-job-Frontend/ ./
RUN npm run build
# The second stage
# Copy React static files and start nginx
FROM nginx:stable-alpine
# For nextJS after build .next folder is created
# we will copy it into /usr/share/nginx/html folder
# if we had used react /out or /build would have been created
COPY --from=build /app/frontend/.next /usr/share/nginx/html

# For React frontend
# COPY --from=build /app/frontend/out /usr/share/nginx/html 
CMD ["nginx", "-g", "daemon off;"]
