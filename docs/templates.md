# 📧 HTML Email Templates (Blog Management System)

This file contains reusable HTML email templates for the backend email system.

---

## 📁 Folder Structure

services/
│── emailService.js
│── templates/
│   ├── welcomeTemplate.js
│   ├── blogApprovedTemplate.js
│   ├── blogRejectedTemplate.js
│   └── newBlogTemplate.js

---

## 🎉 1. Welcome Email Template

```js
exports.welcomeTemplate = (name) => `
  <div style="font-family: Arial; padding: 20px;">
    <h2 style="color: #4f46e5;">Welcome ${name} 🎉</h2>
    <p>Thanks for joining our Blog Platform.</p>
    <p>Start writing amazing blogs today!</p>
    <br/>
    <small>— Blog Team</small>
  </div>
`;
```

---

## ✅ 2. Blog Approved Template

```js
exports.blogApprovedTemplate = (name, title) => `
  <div style="font-family: Arial; padding: 20px;">
    <h2 style="color: green;">🎉 Blog Approved</h2>
    <p>Hi ${name},</p>
    <p>Your blog <strong>${title}</strong> has been approved.</p>
    <p>It is now live on the platform 🚀</p>
  </div>
`;
```

---

## ❌ 3. Blog Rejected Template

```js
exports.blogRejectedTemplate = (name, title) => `
  <div style="font-family: Arial; padding: 20px;">
    <h2 style="color: red;">❌ Blog Rejected</h2>
    <p>Hi ${name},</p>
    <p>Your blog <strong>${title}</strong> was not approved.</p>
    <p>Please review and submit again.</p>
  </div>
`;
```

---

## 📢 4. New Blog Notification (Admin)

```js
exports.newBlogTemplate = (title, author) => `
  <div style="font-family: Arial; padding: 20px;">
    <h2>📢 New Blog Pending Approval</h2>
    <p><strong>${author}</strong> submitted a new blog.</p>
    <p>Title: ${title}</p>
  </div>
`;
```

---

## 🔗 Usage Example

```js
const { sendEmail } = require("../services/emailService");
const { welcomeTemplate } = require("../services/templates/welcomeTemplate");

await sendEmail({
  to: user.email,
  subject: "Welcome 🎉",
  html: welcomeTemplate(user.name),
});
```

---

## 🎨 Notes

- Use **inline CSS** (important for email compatibility)
- Avoid external stylesheets
- Keep layout simple for best rendering
- Test emails using tools like Mailtrap or Gmail

---

## 🚀 Pro Tip

You can enhance templates by:
- Adding logo
- Adding buttons (CTA)
- Making responsive layouts

Example button:

```html
<a href="#" style="
  display:inline-block;
  padding:10px 15px;
  background:#4f46e5;
  color:white;
  text-decoration:none;
  border-radius:5px;
">
  View Blog
</a>
```
