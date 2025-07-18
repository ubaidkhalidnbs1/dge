# 🏛 Social Support Application

A modern multi-step form application for citizens to apply for financial support. Built with **React**, **Vite**, and **Material UI**, this platform provides a clean, localized, and AI-assisted experience for submitting applications in both **English** and **Arabic (RTL)**.

---

## 📦 Local Setup

```bash
npm install
npm run start:local
```

---

## 🚀 Features

- ✅ Multi-step wizard with progress tracking
- 🌐 Dual language support (English & Arabic)
- ↔️ RTL layout toggle (auto with i18n)
- 💾 Auto-save user progress to LocalStorage
- 🧠 AI integration (GPT-3.5 Turbo) for writing hardship statements
- 📱 Fully responsive across mobile, tablet, desktop
- ♿ Accessibility with ARIA & keyboard navigation
- 📦 Form state via React Hook Form + Context API
- 🔐 Global error handling with Axios interceptors
- 🔁 Draft resume & reset functionality
- 🧪 Jest + React Testing Library setup

---

## 🛠 Tech Stack

| Category         | Tool / Library       |
| ---------------- | -------------------- |
| Frontend         | React + Vite         |
| UI Components    | Material UI          |
| State Management | Context API          |
| Forms            | React Hook Form      |
| i18n             | react-i18next        |
| HTTP Requests    | Axios + Interceptors |
| AI Assistant     | OpenAI GPT-3.5 Turbo |
| Routing          | React Router DOM     |
| Styling          | SCSS (Sass Modules)  |
| Linting          | ESLint + Prettier    |

---

## 📁 Folder Structure

<details>
<summary>Click to expand full folder structure</summary>

```
src/
├── components/
│   ├── ErrorBoundary/           # Global error wrapper
│   ├── Header/                  # App header (title + language dropdown)
│   └── Loading/                 # Loader component

├── constants/
│   ├── language/                # Language codes (ar/en)
│   ├── regex/                   # Validation patterns
│   ├── routes/                  # Central route definitions

├── context/
│   └── FormContext.jsx          # Current step + draft state manager

├── hooks/
│   ├── useAsyncAction/          # Handles loading, error state for APIs
│   └── useLayoutDirection/      # Detects RTL / LTR based on language

├── i18n/
│   ├── locales/
│   │   ├── en.json              # English translations
│   │   └── ar.json              # Arabic translations
│   └── index.js                 # i18next setup

├── interceptors/
│   └── axios/
│       └── index.jsx            # Axios instance with auth + error snackbar

├── pages/
│   ├── ApplicationForm/
│   │   ├── components/
│   │   │   ├── FormContent/     # Step renderer
│   │   │   ├── SelectField/     # Shared dropdown field
│   │   │   └── Steps/
│   │   │       ├── PersonalInfo/
│   │   │       ├── HousholdInfo/
│   │   │       └── FinancialInfo/
│   │   │           └── TextArea/ # GPT button field
│   │   ├── constants/           # Field config per step
│   │   ├── context/             # FormContext provider
│   │   ├── services/            # OpenAI + submit API
│   │   └── index.jsx            # <MultiStepForm />

│   └── Success/
│       └── index.jsx            # Thank you page

├── styles/
│   ├── colors.scss
│   └── variables.scss

├── App.jsx                      # Routes & layout
├── App.scss                     # Base styles
└── main.jsx                     # App bootstrapper

```

</details>

---

## 🔐 OpenAI Integration

Used in Step 3 for **Help Me Write** functionality:

Done separately for security reasons. Implemented as backend. However it can be be set as follow

## 🔐 How to Set Up the OpenAI API Key

To enable AI writing assistance in the application form, you need to configure an OpenAI API key.

### 📋 Steps

1. **Create an OpenAI Account:**
   - Visit [https://platform.openai.com/signup](https://platform.openai.com/signup)
   - Log in and go to [API Keys](https://platform.openai.com/account/api-keys)

2. **Generate a Secret API Key:**
   - Click **"Create new secret key"**
   - Copy the key (starts with `sk-...`)

3. **Configure Environment Variable:**
   - In the root of your project, create a `.env` file (if not present)
   - Add this line:

     ```env
     VITE_OPENAI_API_KEY=your-secret-api-key-here
     ```

   - Replace `your-secret-api-key-here` with your actual key.

   > ⚠️ Never share or commit your API key. Make sure `.env` is listed in `.gitignore`.

4. **Restart the Dev Server:**

   ```bash
   npm run dev
   ```

✅ You're now ready to use the **"Help Me Write"** feature powered by OpenAI GPT!

## ⚠️ Troubleshooting

| Issue                      | Solution                                |
| -------------------------- | --------------------------------------- |
| OpenAI not working         | Check `.env.local` and API key          |
| Validation on load         | Ensure `mode: onTouched` is respected   |
| RTL layout not working     | Confirm `useLayoutDirection` hook usage |
| Axios headers missing      | Verify `axios/interceptors/index.jsx`   |
| Select field not restoring | Check RHF + default values              |

---

## 📜 Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "start:local": "vite --mode development",
  "start:develop": "vite --mode development",
  "lint": "eslint . --ext .js,.jsx,.cjs",
  "format": "prettier --write .",
}
```

---

## 📬 Contact

For questions or suggestions:

📧 **Ubaid Khalid**  
GitHub: [ubaidkhalidnbs1](https://github.com/ubaidkhalidnbs1)
