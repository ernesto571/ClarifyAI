# ✦ ClarifyAI

**ClarifyAI** is an AI-powered legal document analyzer that helps anyone understand contracts without a lawyer. Paste contract text or upload a PDF/DOCX file and get an instant structured breakdown — including an AI summary, key points, red flags with severity ratings, and a section-by-section review.

Built for freelancers, tenants, small business owners, and anyone who signs contracts without legal counsel.

---

## 🚀 Features

- 📄 **Document Analysis**
  Paste text or upload a PDF/DOCX file and receive a full AI-powered breakdown instantly.

- 🎚️ **Three Analysis Tones**
  Choose between Simple, Detailed, and ELI5 (Explain Like I'm 5) — making legal content accessible to every type of user.

- 🔴 **Red Flag Detection**
  Automatically identifies risky or one-sided clauses with High, Medium, and Low severity ratings.

- 📑 **Section Breakdown**
  Each section of the contract is analyzed individually with a status indicator (Standard, Good, Review, Caution).

- 💾 **Save & Export**
  Save analyses to your account, export as PDF, or copy to clipboard.

- 🕘 **Analysis History**
  Every document you analyze is saved to your history — searchable and filterable by contract type.

- 🔐 **Authentication**
  Full auth system via Better Auth with email/password, Google OAuth, and GitHub OAuth.

- 👤 **User Profile**
  View your stats, active sessions, sign-in method, and manage your account from a dedicated profile page.

---

## 🧰 Tech Stack

### Frontend
- React + TypeScript
- Tailwind CSS
- Zustand (State Management)
- React Dropzone
- jsPDF
- React Hot Toast
- Lucide React

### Backend
- Node.js + Express
- PostgreSQL (Neon Serverless)
- Google Gemini AI
- Better Auth
- Multer + pdf-parse + mammoth
- Cloudinary

---

## ⚡️ Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL database (Neon recommended)
- Google Gemini API key ([get one here](https://aistudio.google.com/))
- Cloudinary account ([sign up free](https://cloudinary.com/))
- Better Auth secret key

---

### 🔧 Installation

#### 1. Clone the repository
```bash
git clone https://github.com/ernesto571/ClarifyAI.git
cd ClarifyAI
```

#### 2. Install dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

#### 3. Create environment variables

**Backend (.env):**
```
PORT=3001
NODE_ENV=development
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3001
CLIENT_URL=http://localhost:5173
PGHOST=your_neon_host
PGDATABASE=your_database
PGUSER=your_user
PGPASSWORD=your_password
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

**Frontend (.env):**
```
VITE_BACKEND_URL=https://your-backend-url.com
```

---

### ▶️ Run the App

#### Backend:
```bash
cd backend
npm run dev
```

#### Frontend:
```bash
cd frontend
npm run dev
```

Then open your browser at **http://localhost:5173**

---

## 🌍 Deployment

- **Frontend** → [Netlify](https://netlify.com)
- **Backend** → [Render](https://render.com)
- **Database** → [Neon](https://neon.tech)
- **File Storage** → [Cloudinary](https://cloudinary.com)

**Tips:**
- Set `NODE_ENV=production` on your backend host
- Set `sameSite: "none"` and `secure: true` for cookies in production
- Add your production URLs to Google and GitHub OAuth console

---

## 🧠 Project Structure

```
clarifyai/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── lib/
│   ├── routes/
│   └── src/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   └── App.tsx
│   └── vite.config.ts
│
└── README.md
```

---

## 🧩 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/analyze` | Analyze a document (text or file) |
| `GET` | `/api/history` | Fetch user's analysis history |
| `GET` | `/api/user/profile` | Get current user's profile |
| `PATCH` | `/api/user/profile` | Update profile details |
| `DELETE` | `/api/user/delete` | Delete user account |
| `GET` | `/api/documents` | Get saved documents |
| `PATCH` | `/api/documents/:id/save` | Save an analysis |
| `PATCH` | `/api/documents/:id/unsave` | Unsave an analysis |

---

## 💡 Future Enhancements

- Stripe integration for paid subscription tier
- Multi-language contract support
- AI-powered contract comparison (compare two versions)
- Browser extension for analyzing contracts inline
- Team/organization accounts

---

## 🧑‍💻 Author

**Emmanuel Cruz**
Full-stack Developer | Lagos, Nigeria
[GitHub](https://github.com/ernesto571)
[Linkedin](https://www.linkedin.com/in/emmanuel-adesemoye-996a43338)
