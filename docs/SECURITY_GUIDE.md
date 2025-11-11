# 🔐 Security Guide - API Keys & Secrets

## Important: API Keys are Sensitive!

Never expose your API keys to the public. Follow these best practices:

---

## ✅ Safe: `.env.local` (Local Only)

The `.env.local` file is **SAFE** because:
- In `.gitignore` → won't be pushed to GitHub
- Only on your computer
- Cannot be accessed from GitHub repository

```env
# ✅ SAFE - only on your computer
OPENAI_API_KEY=sk-proj-your_key_here
```

---

## ❌ DON'T: Push API Keys to GitHub

**DANGEROUS!** Never push API keys to repository:

```env
# ❌ DANGEROUS - don't commit this!
OPENAI_API_KEY=sk-proj-real_key_here
```

**Why is it dangerous?**
- Anyone can access your API key
- People can abuse your quota
- You can get high bills
- GitHub automatically scans for leaked keys

---

## ✅ Safe: Vercel Environment Variables (Production)

For production on Vercel, use **Vercel Environment Variables**:

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add variables securely in Vercel (not in GitHub)
3. Vercel automatically injects into production

**Benefits:**
- ✅ Stored securely in Vercel
- ✅ Never exposed to public
- ✅ Only used in production
- ✅ Can be rotated anytime

---

## ✅ Safe: `.env.local.example` (Template Only)

The `.env.local.example` file is **SAFE** because:
- Has no real values, only placeholders
- Functions as a template for other developers
- People know to replace with their own values

```env
# ✅ SAFE - template only, not real values
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_id_here
```

---

## 🚨 If Accidentally Exposed

**If API key is exposed on GitHub:**

1. **IMMEDIATELY disable API key:**
   - Go to https://platform.openai.com/api-keys
   - Delete the exposed key
   - Create NEW key

2. **Check for unauthorized usage:**
   - Go to OpenAI dashboard
   - Check "Usage" for suspicious activity
   - Check billing for unexpected charges

3. **Update in Vercel:**
   - Go to Vercel → Settings → Environment Variables
   - Update OPENAI_API_KEY with NEW key
   - Redeploy

4. **Git history cleanup (Advanced):**
   - Use `git filter-branch` to remove from history
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
- [OpenAI: API Security Best Practices](https://platform.openai.com/docs/guides/safety-best-practices)
- [Vercel: Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

## Team Guidelines

For development teams:

1. **Never commit `.env.local`** to version control
2. **Never share API keys** in chat, email, or public documentation
3. **Always use `.env.local.example`** as a template
4. **Each developer** has their own `.env.local`
5. **Production** uses Vercel Environment Variables
6. **Rotate keys** regularly for enhanced security

---

**Remember: Your API key is like your password. Keep it secret! 🔐**
