# 📄 Social Support Portal — Architecture & Engineering Notes

This document outlines the architectural decisions, structure, and enhancement strategies used in the **Social Support Application**.

---

## 🧱 Structure & Design

### 📁 Folder Layout (Feature-First)

```
src/
├── components/        # Reusable UI (Header, Loading, ErrorBoundary)
├── constants/         # Routes, regex, language codes
├── context/           # FormContext (step, draft, reset)
├── hooks/             # useAsyncAction, useLayoutDirection
├── i18n/              # i18next config + translations
├── interceptors/      # Axios with error-handling interceptors
├── pages/
│   ├── ApplicationForm/
│   └── Success/
├── styles/            # SCSS tokens
├── App.jsx
└── main.jsx
```

---

## 🧩 Form System

- **Multi-step form (3 steps):**
  1. Personal Info
  2. Household Info
  3. Financial Support
- Built using `react-hook-form` (`FormProvider`)
- Field-level validation with `trigger(stepFields)` before allowing progression
- RHF's `defaultValues` + `reset()` support saved state

---

## 🌐 i18n & RTL Support

- **Library:** `react-i18next`
- Full language toggle with dynamic layout adaptation:
  - `dir` attribute (`ltr`/`rtl`)
  - Alignment via `useLayoutDirection` hook
  - Dynamic `label`, `placeholder`, `error messages`
- Language-aware SCSS/JSX styling

---

## 💾 Local Storage Strategy

- Stores draft on step change using `getValues()`
- Restores on reload via `reset(formData)`
- Context API handles `saveDraft()` and `loadDraft()`
- Data format:

```json
{
  "step": 1,
  "formData": {
    "name": "Ali",
    "gender": "male",
    "city": "Dubai"
  }
}
```

---

## 🧠 OpenAI GPT Integration

- Enabled on 3 fields in final step:
  - Current Financial Situation
  - Employment Circumstances
  - Reason for Applying
- Triggered via `Help Me Write` button
- Prompts are localized (Arabic or English)
- Suggestion is shown in modal (Accept / Edit / Discard)
- Uses Axios + async hook for loading/error handling

---

## 🔄 Axios Interceptors

- Adds headers to every request:
  - `Authorization` (if token available)
  - `Accept-Language` (for backend localization)
- Error responses are handled globally via `<Snackbar />`
- Uses `i18n.t()` for translating error messages

---

## ♿ Accessibility Features

- All fields use proper `<label>`, `aria-*` roles
- Form is fully keyboard-navigable
- Errors are screen-reader visible
- Uses Material UI components for a11y compliance

---

## ✅ Enhancements Implemented

- 🌀 **Reset Button**: Clears RHF state + context + localStorage
- ⚡ **Lazy Loading**: Success screen is code-split
- 🧪 **ErrorBoundary**: Wraps app for fallback UI on crash
- 📜 **PropTypes**: Ensures props validation in reusable components
- 🔧 **ESLint/Prettier**: Enforced consistent coding standards
- 📊 **RTL-aware Styling**: Direction-sensitive design everywhere

---

## 🧪 Future Improvements

| Area          | Suggestion                                    |
| ------------- | --------------------------------------------- |
| ✅ Validation | Add schema support with Yup/Zod               |
| 🧪 Testing    | Add tests with `@testing-library/react`       |
| 🔐 Auth       | Add backend token/session verification        |
| 💬 UX         | Add inline helper text & auto-scroll to error |
| 💾 Offline    | Add draft expiry, versioning in localStorage  |
