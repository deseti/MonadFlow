# NadAI Troubleshooting & Setup Guide

## Problem: "OpenAI API key not configured" Error

If you see the error `Sorry, I encountered an error. Please make sure the OpenAI API key is configured correctly`, follow these debugging steps:

---

## 🔍 Debugging Checklist

### Step 1: Verify Local Environment (.env.local)

**File:** `d:\user\MonadFlow\.env.local`

```env
OPENAI_API_KEY=sk-proj-your_key_here
```

✅ **Checklist:**
- [ ] File `.env.local` exists in MonadFlow root folder
- [ ] `OPENAI_API_KEY=` is in the file (not commented with `#`)
- [ ] API key has no extra spaces: `OPENAI_API_KEY=sk-proj...` (not `OPENAI_API_KEY = sk-proj...`)
- [ ] Development server restarted after adding `.env.local`

**Restart Development Server:**
```bash
npm run dev
```

---

### Step 2: Verify Vercel Environment Variables

If deployed to Vercel, environment variables MUST be set:

**In Vercel Dashboard:**

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select project `MonadFlow`
3. Go to **Settings** → **Environment Variables**
4. Click **Add** and set:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** `sk-proj-your_key_here`
   - **Environments:** Select `Production`, `Preview`, and `Development`
   - Click **Save**

5. **Redeploy** the Vercel project:
   ```bash
   git push origin main
   ```
   (Vercel will auto-deploy)

   Or manual redeploy via Vercel dashboard:
   - Click **Deployments** 
   - Click **...** next to latest deployment
   - Click **Redeploy**

---

### Step 3: Test API Key Validity

**Ensure your API key is still valid:**

1. Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Verify API key is listed and **not revoked**
3. Check your OpenAI account has available credits
4. Verify the key has proper permissions

---

### Step 4: Check Browser Console for Detailed Error

1. Open MonadFlow in browser
2. Press **F12** (Developer Tools)
3. Go to **Console** tab
4. Click NadAI button to open chat
5. Send a message
6. Look for error messages:

**Expected logs:**
```
✅ OPENAI_API_KEY found, initializing OpenAI API...
📤 Sending message to OpenAI API... {messageLength: 25}
✅ Response received from OpenAI API {responseLength: 150}
```

**If you see errors:**
```
❌ OPENAI_API_KEY not found in environment variables
❌ NadAI Chat API error: {message: "...", name: "...", stack: "..."}
```

---

### Step 5: Check Network Tab

1. Open Developer Tools → **Network** tab
2. Send a message to NadAI
3. Look for request to `/api/chat`
4. Click on it and check:
   - **Status Code:** Should be `200` (success) or `500` (error with details)
   - **Request Headers:** Check if request body has correct message
   - **Response:** Look for error message or response content

**Success Response (200):**
```json
{
  "success": true,
  "response": "NadAI's answer here..."
}
```

**Error Response (500):**
```json
{
  "error": "OpenAI API key not configured",
  "debug": "Missing OPENAI_API_KEY"
}
```

---

## 🛠️ Common Issues & Solutions

### Issue 1: "OPENAI_API_KEY not found in environment variables"

**Solution:**
```bash
# 1. Verify .env.local exists
ls -la .env.local

# 2. Check content
cat .env.local

# 3. Verify format (no extra spaces)
# Correct:   OPENAI_API_KEY=sk-proj...
# Wrong:     OPENAI_API_KEY = sk-proj...
# Wrong:     # OPENAI_API_KEY=sk-proj... (commented out)

# 4. Restart dev server
npm run dev
```

### Issue 2: "API Key is invalid or revoked"

**Solution:**
```
1. Go to https://platform.openai.com/api-keys
2. Delete the old API key
3. Create a NEW API key
4. Copy the new key
5. Update in .env.local: OPENAI_API_KEY=new_key_here
6. Restart npm run dev
```

### Issue 3: "Insufficient credits or quota exceeded"

**Solution:**
- Check your OpenAI account balance
- Add payment method at https://platform.openai.com/account/billing
- Verify you have available credits
- Check usage limits in your account dashboard

### Issue 4: Error on Vercel but works locally

**Solution:**
```
1. Environment variable not set in Vercel
2. Go to Vercel Settings → Environment Variables
3. Add OPENAI_API_KEY for Production, Preview, Development
4. Redeploy: git push origin main
5. Wait for deployment to complete (~5 minutes)
6. Test production URL
```

### Issue 5: "Rate limit exceeded"

**Solution:**
- Check your OpenAI rate limits
- Tier 1: 3 RPM (requests per minute)
- Wait ~1 minute if limit reached
- Or upgrade tier at https://platform.openai.com/account/limits

### Issue 6: Response time too slow

**Solution:**
- OpenAI API first-time request can be slow (~3-5 seconds)
- Subsequent requests are faster
- Check network latency: Press F12 → Network → see response time in `/api/chat`

---

## 📋 Verification Checklist

Before deploying, ensure:

- [ ] `.env.local` file exists locally
- [ ] `OPENAI_API_KEY=sk-proj...` in `.env.local`
- [ ] Development server running: `npm run dev`
- [ ] NadAI chatbot works locally
- [ ] GitHub push all changes: `git push origin main`
- [ ] Vercel Environment Variables set:
  - [ ] `OPENAI_API_KEY` for Production
  - [ ] `OPENAI_API_KEY` for Preview
  - [ ] `OPENAI_API_KEY` for Development
- [ ] Vercel deployment complete
- [ ] Test production URL: `https://your-project.vercel.app`
- [ ] NadAI chatbot works on production

---

## 🧪 Manual API Test

To test the API key outside the application:

**Using curl:**
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hello NadAI, who are you?",
    "history": []
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "response": "I am NadAI, the specialized AI assistant for MonadFlow..."
}
```

---

## 📞 Need Help?

If you still have errors after following these steps:

1. **Check the logs:**
   - View console output from `npm run dev`
   - Check Vercel logs in Vercel dashboard

2. **Verify API key:**
   - Copy-paste exact API key from: https://platform.openai.com/api-keys
   - Ensure no extra spaces

3. **Check internet connection:**
   - Verify browser can access internet
   - Try different network/WiFi

4. **Report issue:**
   - Create issue at [GitHub](https://github.com/deseti/MonadFlow/issues)
   - Include error message and console logs
   - Include screenshot from Network tab

---

## 🚀 Success!

If you see a response from NadAI, congratulations! The chatbot is working properly! ✨

Example successful conversation:
```
You: "What is MonadFlow?"
NadAI: "MonadFlow is an interactive 3D platform for discovering the Monad ecosystem..."
```

---

**Last Updated:** November 11, 2025

---

## 🔍 Debugging Checklist

### Step 1: Verify Local Environment (.env.local)

**File:** `d:\user\MonadFlow\.env.local`

```env
GEMINI_API_KEY=AIzaSyD6__tr_RmF1cNSGCMHiXY7B5SDWMy1GQM
```

✅ **Checklist:**
- [ ] File `.env.local` exists di root folder MonadFlow
- [ ] `GEMINI_API_KEY=` ada di file (tidak di-comment dengan `#`)
- [ ] API key tidak ada extra spaces: `GEMINI_API_KEY=AIzaSyD...` (bukan `GEMINI_API_KEY = AIzaSyD...`)
- [ ] Development server sudah di-restart setelah menambah `.env.local`

**Restart Development Server:**
```bash
npm run dev
```

---

### Step 2: Verify Vercel Environment Variables

Jika di-deploy ke Vercel, environment variable HARUS di-set:

**Di Vercel Dashboard:**

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select project `MonadFlow`
3. Go to **Settings** → **Environment Variables**
4. Click **Add** dan set:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** `AIzaSyD6__tr_RmF1cNSGCMHiXY7B5SDWMy1GQM`
   - **Environments:** Select `Production`, `Preview`, dan `Development`
   - Click **Save**

5. **Redeploy** vercel project:
   ```bash
   git push origin main
   ```
   (Vercel akan auto-deploy)

   Atau manual redeploy via Vercel dashboard:
   - Click **Deployments** 
   - Click **...** next to latest deployment
   - Click **Redeploy**

---

### Step 3: Test API Key Validity

**Pastikan API key Anda masih valid:**

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Verify API key is listed and **not revoked**
3. Check [Google Cloud Console](https://console.cloud.google.com):
   - Go to **APIs & Services** → **Credentials**
   - Find your API key
   - Verify **Generative AI API** is enabled in your project

---

### Step 4: Check Browser Console for Detailed Error

1. Open MonadFlow di browser
2. Press **F12** (Developer Tools)
3. Go to **Console** tab
4. Click NadAI button to open chat
5. Send a message
6. Look for error messages:

**Expected logs:**
```
✅ GEMINI_API_KEY found, initializing Gemini API...
📤 Sending message to Gemini API... {messageLength: 25}
✅ Response received from Gemini API {responseLength: 150}
```

**If you see errors:**
```
❌ GEMINI_API_KEY not found in environment variables
❌ NadAI Chat API error: {message: "...", name: "...", stack: "..."}
```

---

### Step 5: Check Network Tab

1. Open Developer Tools → **Network** tab
2. Send a message to NadAI
3. Look for request to `/api/chat`
4. Click on it and check:
   - **Status Code:** Should be `200` (success) or `500` (error with details)
   - **Request Headers:** Check if request body has correct message
   - **Response:** Look for error message or response content

**Success Response (200):**
```json
{
  "success": true,
  "response": "NadAI's answer here..."
}
```

**Error Response (500):**
```json
{
  "error": "Gemini API key not configured",
  "debug": "Missing GEMINI_API_KEY"
}
```

---

## 🛠️ Common Issues & Solutions

### Issue 1: "GEMINI_API_KEY not found in environment variables"

**Solution:**
```bash
# 1. Verify .env.local exists
ls -la .env.local

# 2. Check content
cat .env.local

# 3. Verify format (no extra spaces)
# Correct:   GEMINI_API_KEY=AIzaSyD...
# Wrong:     GEMINI_API_KEY = AIzaSyD...
# Wrong:     # GEMINI_API_KEY=AIzaSyD... (commented out)

# 4. Restart dev server
npm run dev
```

### Issue 2: "API Key is invalid or revoked"

**Solution:**
```
1. Go to https://makersuite.google.com/app/apikey
2. Delete the old API key
3. Create a NEW API key
4. Copy the new key
5. Update in .env.local: GEMINI_API_KEY=new_key_here
6. Restart npm run dev
```

### Issue 3: "gemini-pro is not found"

**Solution:**
- This error means the model is not supported in v1beta
- Solution: Use `gemini-1.5-flash` instead (already updated in code)
- Clear browser cache: Press Ctrl+Shift+Delete → Clear Cache
- Refresh page: Ctrl+R

### Issue 4: Error on Vercel but works locally

**Solution:**
```
1. Environment variable di Vercel belum ter-set
2. Go to Vercel Settings → Environment Variables
3. Add GEMINI_API_KEY for Production, Preview, Development
4. Redeploy: git push origin main
5. Wait untuk deployment selesai (~5 menit)
6. Test di production URL
```

### Issue 4: "Rate limit exceeded"

**Solution:**
- Free tier Gemini API: 60 requests per minute
- Jika mencapai limit, tunggu ~1 menit
- Atau upgrade ke paid tier di [Google Cloud Console](https://console.cloud.google.com)

### Issue 5: Response time too slow

**Solution:**
- Gemini API first-time request bisa lambat (~3-5 detik)
- Subsequent requests lebih cepat
- Check network latency: Press F12 → Network → lihat response time di `/api/chat`

---

## 📋 Verification Checklist

Sebelum deploy, pastikan:

- [ ] `.env.local` file exists locally
- [ ] `GEMINI_API_KEY=AIzaSyD6__tr_RmF1cNSGCMHiXY7B5SDWMy1GQM` di `.env.local`
- [ ] Development server running: `npm run dev`
- [ ] NadAI chatbot works locally
- [ ] GitHub push all changes: `git push origin main`
- [ ] Vercel Environment Variables di-set:
  - [ ] `GEMINI_API_KEY` untuk Production
  - [ ] `GEMINI_API_KEY` untuk Preview
  - [ ] `GEMINI_API_KEY` untuk Development
- [ ] Vercel deployment selesai
- [ ] Test production URL: `https://your-project.vercel.app`
- [ ] NadAI chatbot works on production

---

## 🧪 Manual API Test

Untuk test API key di-luar aplikasi:

**Using curl:**
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Halo NadAI, siapa kamu?",
    "history": []
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "response": "Saya adalah NadAI, asisten AI khusus MonadFlow..."
}
```

---

## 📞 Need Help?

Jika masih error setelah mengikuti steps di atas:

1. **Check the logs:**
   - Lihat console output dari `npm run dev`
   - Check Vercel logs di Vercel dashboard

2. **Verify API key:**
   - Copy-paste exact API key dari browser: https://makersuite.google.com/app/apikey
   - Pastikan tidak ada extra spaces

3. **Check internet connection:**
   - Verify browser bisa access internet
   - Try different network/WiFi

4. **Report issue:**
   - Create issue di [GitHub](https://github.com/deseti/MonadFlow/issues)
   - Include error message dan console logs
   - Include screenshot dari Network tab

---

## 🚀 Success!

Jika Anda melihat respons dari NadAI, selamat! Chatbot sudah berfungsi dengan baik! ✨

Contoh conversation yang berhasil:
```
You: "Apa itu MonadFlow?"
NadAI: "MonadFlow adalah platform 3D interaktif untuk menemukan ekosistem Monad..."
```

---

**Last Updated:** November 11, 2025
