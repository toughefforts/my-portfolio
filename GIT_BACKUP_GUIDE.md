# 🛡️ Git Backup & Restore Guide (Checkpoint Document)

Yeh file aapke project ke initial snapshot commit aur uske backup/restore commands ka complete guide hai.

---

## 📌 Commit Summary

- **Commit Hash:** `7d9d292ef9aeb64435d28063fd6d65d7283a6f89` (Short Hash: `7d9d292`)
- **Commit Message:** `feat: initial snapshot of portfolio project`
- **Date & Time:** Fri Sep 11 00:08:16 2026 +0530
- **Total Tracked Files:** 79 files

---

## 🛠️ Undo / Restore Commands (Scenarios)

### Scenario 1: Agar aapne kuch code edit kiya hai aur wapas initial state chahiye
Agar aapne kuch files me changes kiye hain aur abhi tak naya commit nahi banaya hai, to turant sabhi changes ko cancel karke wapas initial commit pe lane ke liye:

```bash
# Saare modified files ke changes discard karein
git reset --hard HEAD

# Agar koi nayi files ya folders banaye the to unhe bhi clean karein
git clean -fd
```

---

### Scenario 2: Agar aapne naye commit bana diye aur unhe hata kar wapas isi commit pe aana ho
Agar aage chalkar aapne 1 ya zyada commits kiye aur aap chahte hain ki un sabhi commits ko hata kar seedha is snapshot commit pe aa jayein:

```bash
git reset --hard 7d9d292
```

> ⚠️ **Dhyan dein:** Yeh command `7d9d292` ke baad wale sabhi changes ko permanently remove kar degi.

---

### Scenario 3: Naye changes ko bina delete kiye is commit ko dekhna (Safe Mode)
Agar aap dekhna chahte hain ki initial commit me code kaisa tha bina aage ke kaam ko nuksan pahunchaye:

```bash
# Snapshot wale commit ko temporary check out karein
git checkout 7d9d292

# Wapas latest main branch pe aane ke liye
git checkout main
```

---

### Scenario 4: Kisi specific ek file ko wapas is commit wali state me lana
Agar aapko poora project nahi balki sirf ek particular file (jaise `HeroSection.tsx`) ko initial commit wali state me revert karna ho:

```bash
git checkout 7d9d292 -- frontend/src/components/sections/HeroSection.tsx
```

---

## 📋 Helpful Git Commands Cheatsheet

| Command | Kya karta hai |
| :--- | :--- |
| `git status` | Check karega ki konsi files modify hui hain aur konsi nayi hain. |
| `git log --oneline` | Saare commits ki list short format me dikhayega. |
| `git diff` | Abhi ke changes aur previous commit ke beech ka difference dikhayega. |
| `git reset --hard HEAD` | Current uncommitted changes ko turant discard karke last commit pe le aayega. |
| `git clean -fd` | Nayi untracked files aur folders ko delete karega. |
| `git add . && git commit -m "your message"` | Future me naya checkpoint / commit banane ke liye. |

---

## 📂 Is Snapshot Me Tracked Files Ki List

### 🌐 Frontend
- `frontend/package.json`
- `frontend/tsconfig.json`
- `frontend/next.config.ts`
- `frontend/src/app/page.tsx`
- `frontend/src/app/layout.tsx`
- `frontend/src/app/globals.css`
- `frontend/src/components/sections/HeroSection.tsx`
- `frontend/src/components/sections/AboutSection.tsx`
- `frontend/src/components/sections/ServicesSection.tsx`
- `frontend/src/components/sections/ProjectsSection.tsx`
- `frontend/src/components/sections/SkillsSection.tsx`
- `frontend/src/components/sections/ExperienceSection.tsx`
- `frontend/src/components/sections/TestimonialsSection.tsx`
- `frontend/src/components/sections/BlogSection.tsx`
- `frontend/src/components/sections/ContactSection.tsx`
- `frontend/src/components/sections/CtaSection.tsx`
- `frontend/src/components/layout/Header.tsx`
- `frontend/src/components/layout/Footer.tsx`
- `frontend/src/components/animations/*`
- `frontend/src/data/*`
- `frontend/public/images/*`

### ⚙️ Backend
- `backend/app/main.py`
- `backend/app/api/contact.py`
- `backend/app/api/health.py`
- `backend/app/core/config.py`
- `backend/app/core/database.py`
- `backend/app/models/contact_message.py`
- `backend/app/schemas/contact.py`
- `backend/app/services/contact_service.py`
- `backend/requirements.txt`
