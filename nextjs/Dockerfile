# Sử dụng image Node.js chính thức
FROM node:18-alpine

# Đặt thư mục làm việc
WORKDIR /usr/src/app/nextjs

# Sao chép package.json và package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Build dự án Next.js
RUN npm run build

# Khởi động server
CMD ["npm", "run", "start"]
