# 🔐 Security Guide - API Keys & Secrets

## Important: API Keys are Sensitive!

Jangan pernah expose API keys Anda ke publik. Berikut best practices:

---

## ✅ Aman: `.env.local` (Local Only)

File `.env.local` adalah **SAFE** karena:
- Di `.gitignore` → tidak akan di-push ke GitHub
- Hanya di komputer Anda sendiri
- Tidak bisa diakses dari GitHub repository

```env
# ✅ SAFE - hanya di komputer Anda
GEMINI_API_KEY=AIzaSyD6__tr_RmF1cNSGCMHiXY7B5SDWMy1GQM
```

---

## ❌ JANGAN: Push API Keys ke GitHub

**BAHAYA!** Jangan pernah push API keys ke repository:

```env
# ❌ BERBAHAYA - jangan commit ini!
GEMINI_API_KEY=AIzaSyD6__tr_RmF1cNSGCMHiXY7B5SDWMy1GQM
```

**Kenapa berbahaya?**
- Anyone dapat akses API key Anda
- Orang bisa abuse quota Anda
- Bisa kena tagihan mahal
- GitHub memindai leaked keys secara otomatis

---

## ✅ Aman: Vercel Environment Variables (Production)

Untuk production di Vercel, use **Vercel Environment Variables**:

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add variable securely di Vercel (bukan di GitHub)
3. Vercel automatically inject ke production

**Keuntungan:**
- ✅ Tersimpan aman di Vercel
- ✅ Tidak pernah di-expose ke public
- ✅ Hanya digunakan saat production
- ✅ Bisa di-rotate kapan saja

---

## ✅ Aman: `.env.local.example` (Template Only)

File `.env.local.example` adalah **SAFE** karena:
- Tidak punya nilai asli, hanya placeholder
- Berfungsi sebagai template untuk developer lain
- Orang tahu harus replace dengan nilai mereka sendiri

```env
# ✅ SAFE - template saja, bukan nilai asli
GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_id_here
```

---

## 🚨 If Accidentally Exposed

**Jika API key terekspos di GitHub:**

1. **SEGERA disable API key:**
   - Go to https://makersuite.google.com/app/apikey
   - Delete the exposed key
   - Create NEW key

2. **Check untuk unauthorized usage:**
   - Go to Google Cloud Console
   - Check "Quota & Usage" untuk suspicious activity
   - Check billing untuk unexpected charges

3. **Update di Vercel:**
   - Go to Vercel → Settings → Environment Variables
   - Update GEMINI_API_KEY dengan NEW key
   - Redeploy

4. **Git history cleanup (Advanced):**
   - Use `git filter-branch` untuk remove dari history
   - Better: Use GitHub's remove sensitive data tool

---

## 🔍 Checking Current State

### Check `.gitignore`:
```bash
cat .gitignore | grep "env"
# Should show: .env*.local
```

### Check git tracking:
```bash
git ls-files | grep "\.env"
# Should ONLY show: .env.local.example
# Should NOT show: .env.local
```

### Verify `.env.local` is ignored:
```bash
git status
# Should NOT show .env.local in "Changes"
```

---

## 📋 Security Checklist

- [ ] `.env.local` exists locally (has YOUR API key)
- [ ] `.env.local` is in `.gitignore`
- [ ] `.env.local` is NOT tracked by Git
- [ ] `.env.local.example` exists (template only, NO real key)
- [ ] `.env.local.example` IS tracked by Git
- [ ] GitHub repository does NOT have API keys
- [ ] Vercel Environment Variables properly set
- [ ] Production deployment uses Vercel env vars

---

## 🔗 Resources

- [GitHub: Protecting sensitive data](https://docs.github.com/en/code-security/secret-scanning)
- [Google: API Security Best Practices](https://cloud.google.com/docs/authentication/api-keys)
- [Vercel: Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

## Team Guidelines

Untuk tim development:

1. **Never commit `.env.local`** to version control
2. **Never share API keys** in chat, email, atau dokumentasi publik
3. **Always use `.env.local.example`** sebagai template
4. **Each developer** punya `.env.local` mereka sendiri
5. **Production** menggunakan Vercel Environment Variables
6. **Rotate keys** regularly untuk enhanced security

---

**Remember: Your API key is like your password. Keep it secret! 🔐**
