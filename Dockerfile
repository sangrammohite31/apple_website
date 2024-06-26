FROM node:18-alpine


WORKDIR /app/frontend

COPY package*.json . /app/frontend/

COPY . /app/frontend/
RUN npm install
RUN npm install -D tailwindcss postcss autoprefixer
RUN npx tailwindcss init -p
EXPOSE 5173
CMD [ "npm" ,"run" ,"dev" ]