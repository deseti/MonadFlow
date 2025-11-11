# NadAI Quick Setup Checklist

Ikuti checklist di bawah untuk setup NadAI dengan cepat:

## ✅ Step 1: Local Setup (Development)

### 1.1 Pastikan `.env.local` sudah ada
```bash
cd d:\user\MonadFlow
ls -la .env.local
```

### 1.2 Pastikan isi `.env.local` benar
```env
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=7060c9633a9f83063b1a0c88f7740ff7
GEMINI_API_KEY=your_gemini_api_key_here
```

⚠️ **IMPORTANT:**
- Ganti `your_gemini_api_key_here` dengan API key Anda dari https://makersuite.google.com/app/apikey
- Jangan ada extra spaces: `GEMINI_API_KEY=AIzaSyD...` (correct)
- Bukan `GEMINI_API_KEY = AIzaSyD...` (wrong - ada space)
- Bukan `# GEMINI_API_KEY=...` (wrong - di-comment)
- **JANGAN SHARE API KEY ANDA!** API key bersifat rahasia

### 1.3 Restart development server
```bash
npm run dev
```

### 1.4 Test locally
1. Open http://localhost:3000/explorer
2. Click sparkles button (bottom-right) untuk open NadAI
3. Send message: "Halo NadAI!"
4. Check untuk response

---

## ✅ Step 2: Vercel Deployment

### 2.1 Push ke GitHub
```bash
git push origin main
```

### 2.2 Set Environment Variables di Vercel

**Via Vercel Dashboard:**

1. Go to https://vercel.com/dashboard
2. Click **MonadFlow** project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Set ini untuk setiap environment (Production, Preview, Development):

   **Name:** `GEMINI_API_KEY`
   **Value:** `[Paste your API key dari https://makersuite.google.com/app/apikey]`
   **Environments:** ✅ Production, ✅ Preview, ✅ Development

6. Click **Save**

⚠️ **SECURITY:** Jangan copy-paste API key di chat atau dokumentasi publik!

### 2.3 Redeploy di Vercel

Option A: Auto-redeploy
```bash
git push origin main
```
(Vercel akan auto-redeploy)

Option B: Manual redeploy
1. Go to Vercel Dashboard → **MonadFlow**
2. Click **Deployments**
3. Find latest deployment
4. Click **...** → **Redeploy**
5. Wait ~5 minutes untuk deployment selesai

### 2.4 Test production
1. Go to your Vercel URL: `https://monadflow-*.vercel.app`
2. Click NadAI button
3. Send test message
4. Verify response dari NadAI

---

## 🧪 Testing Checklist

Pastikan semuanya berfungsi:

- [ ] **Local Testing:**
  - [ ] NadAI button muncul (bottom-right)
  - [ ] Chat window bisa dibuka
  - [ ] Bisa send message
  - [ ] Receive response dari NadAI
  - [ ] No error di browser console

- [ ] **Vercel Testing:**
  - [ ] Deployment selesai (status: Ready)
  - [ ] Website bisa diakses
  - [ ] NadAI button muncul
  - [ ] Chat works
  - [ ] Response dari NadAI muncul
  - [ ] Check Network tab - `/api/chat` response status 200

---

## 🐛 If Something Goes Wrong

### Error: "Gemini API key not configured"

**Checklist:**
1. `.env.local` exists locally? ✅
2. `GEMINI_API_KEY=...` di `.env.local`? ✅
3. Development server restarted? `npm run dev` ✅
4. Vercel env vars di-set? Check Vercel dashboard ✅
5. Vercel deployment selesai? ✅

### Debug Steps:
1. Press F12 di browser → Console tab
2. Click NadAI button
3. Send message
4. Look untuk error message
5. Copy error message
6. Check `/docs/TROUBLESHOOTING_NADAI.md` untuk solusi

---

## 📱 Features to Test

Test yang NadAI sudah implement:

### ✅ Bilingual Support
- Test: "Apa itu Monad?"
- Test: "What is a dApp?"
- NadAI should respond in same language

### ✅ Ecosystem Knowledge
- "Berapa banyak dApps?"
- "Show me DeFi projects"
- "Apa kategori yang ada?"

### ✅ Platform Guidance
- "Bagaimana cara pakai 3D view?"
- "How do I search dApps?"
- "Apa itu infinite scroll?"

### ✅ Friendly Personality
- Should use emojis
- Should be conversational
- Should encourage exploration

---

## 📝 Next Steps

Setelah NadAI working:

1. **Optional: Customize NadAI**
   - Edit `/app/api/chat/route.ts`
   - Modify `getNadAISystemPrompt()`
   - Change personality/responses

2. **Monitor Usage**
   - Free Gemini API: 60 requests/min
   - Check Google Cloud Console untuk quota

3. **Optional: Upgrade to Paid**
   - Go to Google Cloud Console
   - Enable billing
   - Get higher limits

4. **Share & Promote**
   - Tell team tentang NadAI
   - Get feedback dari users
   - Iterate & improve

---

## 🔗 Useful Links

- 📖 [NadAI Guide](./NADAI_GUIDE.md)
- 🐛 [Troubleshooting](./TROUBLESHOOTING_NADAI.md)
- 🌐 [Monad Website](https://www.monad.xyz)
- 🔑 [Gemini API Key](https://makersuite.google.com/app/apikey)
- ✨ [Vercel Dashboard](https://vercel.com/dashboard)

---

## ❓ Questions?

Jika masih ada masalah:

1. Check documentation di `/docs`
2. Check console logs (F12 → Console)
3. Check Vercel logs di dashboard
4. Create issue di GitHub dengan details

---

**NadAI Setup Complete! 🚀✨**

Happy exploring dengan MonadFlow! 🌊
