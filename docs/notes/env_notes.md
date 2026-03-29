# 📁 .env File (Environment Variables)

## 🧠 What is a .env file?

A `.env` file is used to store **configuration variables** and **sensitive data** outside your main code.

👉 It helps keep your code **secure and flexible**

---

## 🎯 Why do we use .env?

- 🔐 Hide sensitive data (passwords, API keys)
- ⚙️ Store configuration (port, database)
- 🔄 Easily change values without editing code

---

## 📌 Example .env File

```env
PORT=5000

DB_NAME=blog_app
DB_USER=root
DB_PASS=
DB_HOST=localhost

JWT_SECRET=your_secret_key

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

---

## 🧱 How it Works

### 1. Install dotenv package
```bash
npm install dotenv
```

### 2. Import in your project
```js
require("dotenv").config();
```

### 3. Access variables
```js
process.env.PORT
process.env.DB_NAME
```

---

## 🔐 Important Rules

- ❌ Never upload `.env` to GitHub
- ✅ Add `.env` to `.gitignore`
- ✅ Use different `.env` for development and production

---

## 📁 Example .gitignore

```
node_modules/
.env
```

---

## 🧠 Real-Life Use

❌ Bad Practice:
```js
const password = "123456";
```

✅ Good Practice:
```js
const password = process.env.DB_PASS;
```

---

## 🎯 Key Benefits

| Benefit | Explanation |
|--------|-----------|
| Security | Keeps secrets safe |
| Flexibility | Easy to change config |
| Clean Code | No hardcoded values |

---

## ⚠️ Common Mistakes

- Forgetting to install dotenv
- Not calling `.config()`
- Pushing `.env` to GitHub

---

## 🚀 Pro Tip

In production:
- Use hosting platform environment variables
- Example: Render, Railway, Vercel
