FROM node:16-alpine

# Thiết lập thư mục làm việc
WORKDIR /usr/src/app

# Sao chép package.json và cài đặt các gói cần thiết
COPY package*.json ./
RUN npm install

# Sao chép mã nguồn vào container
COPY . .

# Expose cổng
EXPOSE 6001

# Khởi chạy ứng dụng
CMD ["node", "server.js"]
