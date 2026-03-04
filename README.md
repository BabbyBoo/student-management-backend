# Web3 Student Management - Backend API 🎓

Đây là máy chủ Backend API cho hệ thống Quản lý Sinh viên phi tập trung. Hệ thống kết hợp cơ sở dữ liệu MongoDB để quản lý thông tin CRM tốc độ cao, đồng thời giao tiếp với Blockchain qua Smart Contract để đảm bảo tính minh bạch và không thể giả mạo của dữ liệu.

## 🚀 Công Nghệ Sử Dụng

* **Runtime Environment:** Node.js
* **Framework:** Express.js
* **Ngôn Ngữ:** TypeScript
* **Cơ Sở Dữ Liệu:** MongoDB (Mongoose ODM)
* **Web3:** Ethers.js (Tương tác với Smart Contract)
* **Triển Khai:** Docker

## 📂 Cấu Trúc Thư Mục

Dự án được xây dựng theo mô hình MVC (Model-View-Controller):

```text
├── lib/
│   ├── app.ts                  # Cấu hình Express middleware
│   ├── server.ts               # Khởi chạy HTTP Server và kết nối DB
│   ├── controllers/            # Xử lý logic API (crmController.ts)
│   ├── models/                 # Định nghĩa Schema MongoDB (crmModel.ts)
│   ├── routes/                 # Định tuyến API endpoints (crmRoutes.ts)
│   └── services/               # Dịch vụ bên thứ 3 (contractInteraction.ts)
├── dist/                       # Thư mục mã JavaScript sau khi build
├── Dockerfile                  # Cấu hình tạo Docker Image
├── package.json                # Quản lý thư viện phụ thuộc
└── tsconfig.json               # Cấu hình TypeScript
