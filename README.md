# Student Management Backend

Dự án backend cung cấp API cho hệ thống Quản lý Học sinh (Student Management). Dự án được xây dựng bằng **Node.js**, **Express**, **TypeScript** và **MongoDB**, đồng thời hỗ trợ triển khai (deployment) thông qua **Docker**.

## Công nghệ sử dụng

* **Môi trường:** Node.js
* **Ngôn ngữ:** TypeScript
* **Framework:** Express.js
* **Cơ sở dữ liệu:** MongoDB (với Mongoose)
* **Khác:** Body-parser, Nodemon, ts-node
* **Containerization:** Docker

## Yêu cầu hệ thống

Trước khi chạy dự án, hãy đảm bảo hệ thống của bạn đã cài đặt:
* [Node.js](https://nodejs.org/) (khuyến nghị bản LTS)
* [MongoDB](https://www.mongodb.com/) (đang chạy trên máy hoặc qua MongoDB Atlas)
* [Docker](https://www.docker.com/) (Tùy chọn, nếu bạn muốn chạy bằng Docker)

## Hướng dẫn cài đặt và chạy (Local)

**1. Clone dự án và cài đặt các dependencies:**
```bash
# Clone repository
git clone https://github.com/BabbyBoo/student-management-backend
cd student-management-backend

# Cài đặt các thư viện cần thiết
npm install
```
**2. Cấu hình biến môi trường:**
Tạo một file `.env` ở thư mục gốc của dự án dựa trên `.env.example` (nếu có) hoặc thêm các thông số kết nối cơ bản như sau:

Đoạn mã
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/student_management
```
**3. Chạy ứng dụng:**

* Chạy trong môi trường Development (sử dụng ts-node và nodemon):

```Bash
npm run dev
```

* Biên dịch (Build) sang JavaScript:

```Bash
npm run build
```

* Chạy trong môi trường Production (chạy code đã biên dịch trong thư mục dist):

```Bash
npm start
```

Chạy ứng dụng với Docker: Nếu bạn muốn chạy ứng dụng mà không cần thiết lập Node.js trên máy, bạn có thể sử dụng Docker.

* Build Docker image:

```Bash
docker build -t student-management-backend .
```

* Chạy Docker container:

```Bash
docker run -p 3000:3000 --env-file .env -d student-management-backend
```

## Cấu trúc thư mục dự án
```Plaintext
student-management-backend
 ┣ lib                    # Thư mục chứa mã nguồn chính (TypeScript)
 ┃ ┣ controllers          # Chứa logic xử lý của các API (VD: studentController.ts)
 ┃ ┣ models               # Chứa Mongoose schema (VD: studentModel.ts)
 ┃ ┣ routes               # Chứa định nghĩa các API routes (VD: studentRoutes.ts)
 ┃ ┣ app.ts               # Khởi tạo và cấu hình ứng dụng Express
 ┃ ┗ server.ts            # Entry point để chạy server
 ┣ dist                   # Thư mục chứa code JS sau khi build (tsc)
 ┣ .env                   # File chứa biến môi trường
 ┣ .gitignore             # Các file/thư mục bị bỏ qua bởi Git
 ┣ .dockerignore          # Các file/thư mục bị bỏ qua khi build Docker image
 ┣ Dockerfile             # Cấu hình để build Docker image
 ┣ package.json           # Khai báo các dependencies và scripts
 ┗ tsconfig.json          # Cấu hình biên dịch của TypeScript
```
## API Endpoints
Các routes quản lý học sinh sẽ được cung cấp với các tác vụ CRUD cơ bản. Ví dụ:

`GET /api/students` - Lấy danh sách tất cả học sinh

`GET /api/students/:id` - Lấy thông tin một học sinh cụ thể

`POST /api/students` - Thêm mới một học sinh

`PUT /api/students/:id` - Cập nhật thông tin học sinh

`DELETE /api/students/:id` - Xóa một học sinh
