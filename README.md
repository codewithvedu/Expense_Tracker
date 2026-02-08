# 💰 Expense Tracker Application

A **full-stack Expense Tracker web application** built using **React, Spring Boot, and MySQL** that helps users manage their expenses efficiently with secure authentication and clean data handling.

This project is developed as part of the **PG-DAC (CDAC)** curriculum, following **industry-standard backend architecture and best practices**.

---

## 🚀 Features

✅ User Registration & Login (JWT based authentication)  
✅ Add, Update, View & Delete Expenses  
✅ Monthly & Category-wise Expense Tracking  
✅ Income & Salary Management  
✅ Soft Delete for Users (Data Safety)  
✅ Role-based Secure APIs  
✅ Clean DTO-based API Design  
✅ Responsive UI  

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React
- 🧭 React Router
- 🎨 CSS
- 🌐 Axios

### Backend
- ☕ Spring Boot
- 🔐 Spring Security + JWT
- 📦 JPA / Hibernate
- 🧩 DTO Pattern
- 🧪 REST APIs

### Database
- 🐬 MySQL

---

## 📁 Project Structure

<img width="269" height="476" alt="image" src="https://github.com/user-attachments/assets/83cf6ad1-5e73-4ce6-8a48-0d3ff4d4058f" />


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```
---

## ⚙️ Backend Setup (Spring Boot)

### Configure `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/expense_tracker
spring.datasource.username=root
spring.datasource.password=your_password
```
### Run Backend Application

```properties
mvn spring-boot:run
```

---

## 🎨 Frontend Setup (React)

```properties
cd frontend
npm install
npm start
```
---

## 🔐 Security Highlights

- JWT based Authentication  
- Password encryption using **BCrypt**  
- Role-based access control  
- Soft delete mechanism (no hard data loss)

---

## 📊 Database Design Highlights

- Users table includes **salary** field  
- Income data merged into **Users** table  
- Categories merged into **Expenses** table  
- Soft delete implemented using **status flag**

---

## 🌱 Future Enhancements

- 📈 Expense Analytics & Charts  
- 📤 Export expenses to **PDF / Excel**  
- 🔔 Monthly budget alerts  
- ☁️ Cloud deployment (**AWS**)

---

## 👨‍💻 Author

**Vedant Vishwanath Padave**  
🎓 PG-DAC Student (CDAC)  
💼 Aspiring Software Developer
