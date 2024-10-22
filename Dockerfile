# Chọn một image cơ bản (Node.js) từ Docker Hub
FROM node:14

# Thiết lập thư mục làm việc bên trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt dependencies của ứng dụng
RUN npm install

# Sao chép mã nguồn của ứng dụng vào container
COPY . .

# Mở port 3000 (cổng mà server sẽ chạy)
EXPOSE 3000

# Khởi chạy ứng dụng khi container bắt đầu
CMD ["npm", "start"]
