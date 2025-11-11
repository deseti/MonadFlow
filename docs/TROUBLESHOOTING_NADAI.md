# NadAI Troubleshooting & Setup Guide

## Problem: "Gemini API key not configured" Error

Jika Anda melihat error `Sorry, I encountered an error. Please make sure the Gemini API key is configured correctly`, ikuti debugging steps di bawah:

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

### Issue 3: Error on Vercel but works locally

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
