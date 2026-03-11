# Vercel Blob Storage Setup for Video

## Steps to Upload Video to Vercel Blob

### 1. Get Your Vercel Blob Token

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project (zenvista_website)
3. Go to **Settings** → **Environment Variables**
4. Click **Create** and add:
   - **Name**: `BLOB_READ_WRITE_TOKEN`
   - **Value**: (Click "Generate Token" or create one from Vercel Blob dashboard)
   - **Environment**: All (Production, Preview, Development)
5. Save the token

### 2. Set Token Locally

Create a `.env.local` file in your project root:

```bash
BLOB_READ_WRITE_TOKEN=your_token_here
```

### 3. Upload the Video

Run the upload script:

```bash
node scripts/upload-video.mjs
```

This will:
- Upload the video to Vercel Blob Storage
- Give you a public URL for the video
- Display the URL to use in your code

### 4. Update Hero Component

Copy the URL from the script output and update `components/Hero.tsx`:

```tsx
src="https://your-blob-url.vercel-storage.com/zenora_main_video.mp4"
```

### 5. Deploy to Vercel

```bash
git add .
git commit -m "Add Vercel Blob integration for video"
git push origin main
```

Vercel will automatically redeploy with the video working!

## Alternative: Manual Upload via Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Storage** → **Blob**
4. Click **Upload** and select `public/videos/zenora_main_video.mp4`
5. Copy the public URL
6. Update `components/Hero.tsx` with the URL

## Pricing

Vercel Blob is free for:
- 1 GB storage
- 100 GB bandwidth per month

Perfect for this single video file!
