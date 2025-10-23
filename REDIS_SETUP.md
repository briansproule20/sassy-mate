# Redis KV Setup for Production

This app uses **Vercel KV (Redis)** in production to store petition data and the leaderboard. In local development, it uses `localStorage` as a fallback.

## Production Setup (Vercel)

### 1. Create a KV Database

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to the **Storage** tab
3. Click **Create Database**
4. Select **KV** (Redis-compatible)
5. Give it a name (e.g., `witness-hub-kv`)
6. Click **Create**

### 2. Connect to Your Project

1. After creating the database, click **Connect to Project**
2. Select your project (`sassy-mate` or whatever you named it)
3. Vercel will automatically add these environment variables to your project:
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`
   - `KV_REST_API_READ_ONLY_TOKEN`
   - `KV_URL`

### 3. Deploy

Once the environment variables are set, deploy your project:

```bash
git add .
git commit -m "Add Redis KV integration"
git push origin main
```

Vercel will automatically deploy with Redis enabled!

## How It Works

### Local Development
- Uses `localStorage` to store petitions and leaderboard data
- No Redis connection needed
- Data persists in the browser only

### Production
- Uses Vercel KV (Redis) to store all data
- Data is shared across all users
- Persists permanently in the cloud

### Fallback Strategy
- If Redis is unavailable or not configured, the app automatically falls back to `localStorage`
- The petition form always saves to `localStorage` as a backup
- The Witnesses page tries Redis first, then falls back to `localStorage`

## Data Structure

### Leaderboard (Redis Sorted Set)
- Key: `leaderboard`
- Members: User names
- Scores: Glaze points

### User Data (Redis Hash)
- Key: `user:{name}`
- Fields:
  - `lastSeen`: ISO timestamp
  - `petitionCount`: Number of petitions signed

### Petitions (Redis List + Hashes)
- List key: `petitions` (stores petition IDs)
- Hash key: `petition:{id}`
- Fields:
  - `name`: User name
  - `reason`: Petition text
  - `goatScore`: GOAT-o-meter score (0-100)
  - `goatRank`: Rank title (e.g., "CERTIFIED WITNESS 👑")
  - `timestamp`: Unix timestamp

## Testing

To test Redis integration in production:
1. Deploy to Vercel
2. Sign a petition
3. Visit the `/witnesses` page
4. Check if data persists across sessions and devices

## Cost

Vercel KV has a generous free tier:
- 30,000 commands per month
- 256 MB storage

This should be more than enough for the witness hub!

