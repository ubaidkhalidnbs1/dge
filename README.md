# 🏛 Social Support Application

This is a multi-step social support application portal built with **React**, **Vite**, and **Material UI**. It supports **English & Arabic (RTL)**, provides **AI writing assistance** for hardship fields via **OpenAI GPT**, and is **accessible and responsive**.

---

## 🚀 Features

- ✅ Multi-step form wizard (3 steps)
- 🌐 i18n support (English + Arabic)
- ↔️ RTL toggle
- 💾 Auto-save form data to localStorage
- 🧠 "Help Me Write" AI text suggestions using OpenAI GPT-3.5 Turbo
- 📱 Mobile, tablet, and desktop responsive
- ♿ Basic accessibility support
- 📦 Context API for global state management
- ⚡ Vite for blazing-fast development

---

## 🛠 Tech Stack

| Category         | Tool                 |
| ---------------- | -------------------- |
| UI Framework     | React + Vite         |
| UI Library       | Material UI          |
| Form Handling    | React Hook Form      |
| State Management | Context API          |
| AI Integration   | OpenAI GPT-3.5 Turbo |
| i18n             | react-i18next        |
| HTTP Requests    | Axios                |
| Routing          | React Router DOM     |

---

## 📂 Folder Structure

src/
├── components/
│ └── form/
│ ├── MultiStepForm.jsx
│ ├── Step1.jsx
│ ├── Step2.jsx
│ ├── Step3.jsx
│ ├── AiSuggestionDialog.jsx
│ └── ResetFormButton.jsx
├── context/
│ └── FormContext.jsx
├── pages/
│ └── ThankYou.jsx
├── i18n/
│ ├── index.js
│ ├── en.json
│ └── ar.json
├── App.jsx
├── main.jsx
