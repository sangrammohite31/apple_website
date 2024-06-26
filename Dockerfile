FROM node:18-alpine


WORKDIR /app/frontend

COPY package*.json . /app/frontend/

COPY . /app/frontend/

RUN npm install -D tailwindcss postcss autoprefixer
RUN npx tailwindcss init -p

CMD [ "npm" ,"run" ,"dev" ]