# NadAI Quick Setup Checklist

Follow this checklist to quickly set up NadAI:

## ✅ Step 1: Local Setup (Development)

### 1.1 Ensure `.env.local` exists
```bash
cd d:\user\MonadFlow
ls -la .env.local
```

### 1.2 Verify `.env.local` contents
```env
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=
OPENAI_API_KEY=your_openai_api_key_here
```

⚠️ **IMPORTANT:**
- Replace `your_openai_api_key_here` with your API key from https://platform.openai.com/api-keys
- No extra spaces: `OPENAI_API_KEY=sk-proj...` (correct)
- Not `OPENAI_API_KEY = sk-proj...` (wrong - has space)
- Not `# OPENAI_API_KEY=...` (wrong - commented out)
- **DO NOT SHARE YOUR API KEY!** API keys are confidential

### 1.3 Restart development server
```bash
npm run dev
```

### 1.4 Test locally
1. Open http://localhost:3000/explorer
2. Click sparkles button (bottom-right) to open NadAI
3. Send message: "Hello NadAI!"
4. Check for response

---

## ✅ Step 2: Vercel Deployment

### 2.1 Push to GitHub
```bash
git push origin main
```

### 2.2 Set Environment Variables in Vercel

**Via Vercel Dashboard:**

1. Go to https://vercel.com/dashboard
2. Click **MonadFlow** project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Set this for each environment (Production, Preview, Development):

   **Name:** `OPENAI_API_KEY`
   **Value:** `[Paste your API key from https://platform.openai.com/api-keys]`
   **Environments:** ✅ Production, ✅ Preview, ✅ Development

6. Click **Save**

⚠️ **SECURITY:** Do not copy-paste API keys in chat or public documentation!

### 2.3 Redeploy on Vercel

Option A: Auto-redeploy
```bash
git push origin main
```
(Vercel will auto-redeploy)

Option B: Manual redeploy
1. Go to Vercel Dashboard → **MonadFlow**
2. Click **Deployments**
3. Find latest deployment
4. Click **...** → **Redeploy**
5. Wait ~5 minutes for deployment to complete

### 2.4 Test production
1. Go to your Vercel URL: `https://monadflow-*.vercel.app`
2. Click NadAI button
3. Send test message
4. Verify response from NadAI

---

## 🧪 Testing Checklist

Ensure everything works:

- [ ] **Local Testing:**
  - [ ] NadAI button appears (bottom-right)
  - [ ] Chat window opens
  - [ ] Can send message
  - [ ] Receive response from NadAI
  - [ ] No errors in browser console

- [ ] **Vercel Testing:**
  - [ ] Deployment complete (status: Ready)
  - [ ] Website accessible
  - [ ] NadAI button appears
  - [ ] Chat works
  - [ ] Response from NadAI appears
  - [ ] Check Network tab - `/api/chat` response status 200

---

## 🐛 If Something Goes Wrong

### Error: "OpenAI API key not configured"

**Checklist:**
1. `.env.local` exists locally? ✅
2. `OPENAI_API_KEY=...` in `.env.local`? ✅
3. Development server restarted? `npm run dev` ✅
4. Vercel env vars set? Check Vercel dashboard ✅
5. Vercel deployment complete? ✅

### Debug Steps:
1. Press F12 in browser → Console tab
2. Click NadAI button
3. Send message
4. Look for error message
5. Copy error message
6. Check `/docs/TROUBLESHOOTING_NADAI.md` for solutions

---

## 📱 Features to Test

Test what NadAI has implemented:

### ✅ Multilingual Support
- Test: "What is Monad?"
- Test: "Show me DeFi projects"
- NadAI responds intelligently

### ✅ Ecosystem Knowledge
- "How many dApps are there?"
- "Show me DeFi projects"
- "What categories exist?"

### ✅ Platform Guidance
- "How do I use the 3D view?"
- "How do I search dApps?"
- "What is infinite scroll?"

### ✅ Friendly Personality
- Uses emojis
- Conversational
- Encourages exploration

---

## 📝 Next Steps

After NadAI is working:

1. **Optional: Customize NadAI**
   - Edit `/app/api/chat/route.ts`
   - Modify `getNadAISystemPrompt()`
   - Change personality/responses

2. **Monitor Usage**
   - Check OpenAI dashboard for usage
   - Monitor API quota

3. **Optional: Upgrade Plan**
   - Go to OpenAI dashboard
   - Add billing
   - Get higher limits

4. **Share & Promote**
   - Tell team about NadAI
   - Get feedback from users
   - Iterate & improve

---

## 🔗 Useful Links

- 📖 [NadAI Guide](./docs/NADAI_GUIDE.md)
- 🐛 [Troubleshooting](./docs/TROUBLESHOOTING_NADAI.md)
- 🌐 [Monad Website](https://www.monad.xyz)
- 🔑 [OpenAI API Keys](https://platform.openai.com/api-keys)
- ✨ [Vercel Dashboard](https://vercel.com/dashboard)

---

## ❓ Questions?

If you still have issues:

1. Check documentation in `/docs`
2. Check console logs (F12 → Console)
3. Check Vercel logs in dashboard
4. Create GitHub issue with details

---

**NadAI Setup Complete! 🚀✨**

Happy exploring with MonadFlow! 🌊
