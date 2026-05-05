FROM node:20-alpine as build

WORKDIR /app

# Копируем package.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Второй этап - nginx для раздачи статики
FROM nginx:alpine

# Копируем собранные файлы из первого этапа
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем конфиг nginx (создадим позже)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Порт для фронтенда
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]