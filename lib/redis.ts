// Redis client with multiple provider support and fallbacks
let kv: any = null;
let redis: any = null;

// Initialize Vercel KV
export async function initVercelKV() {
  if (!kv && process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const { kv: vercelKV } = await import("@vercel/kv");
      kv = vercelKV;
      console.log("✅ Vercel KV initialized");
      return true;
    } catch (error) {
      console.error("❌ Failed to initialize Vercel KV:", error);
    }
  }
  return false;
}

// Initialize Upstash Redis
export async function initUpstashRedis() {
  if (!redis && process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      const { Redis } = await import("@upstash/redis");
      redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      });
      console.log("✅ Upstash Redis initialized");
      return true;
    } catch (error) {
      console.error("❌ Failed to initialize Upstash Redis:", error);
    }
  }
  return false;
}

// Get the best available Redis client
export async function getRedisClient() {
  // Try Vercel KV first
  if (kv) return { client: kv, type: 'vercel' };
  
  // Try Upstash Redis
  if (redis) return { client: redis, type: 'upstash' };
  
  // Initialize Vercel KV if not done yet
  if (await initVercelKV()) {
    return { client: kv, type: 'vercel' };
  }
  
  // Initialize Upstash Redis if not done yet
  if (await initUpstashRedis()) {
    return { client: redis, type: 'upstash' };
  }
  
  return null;
}

// Unified Redis operations
export async function redisGet(key: string) {
  const clientInfo = await getRedisClient();
  if (!clientInfo) return null;
  
  try {
    if (clientInfo.type === 'vercel') {
      return await clientInfo.client.get(key);
    } else {
      return await clientInfo.client.get(key);
    }
  } catch (error) {
    console.error("Redis GET error:", error);
    return null;
  }
}

export async function redisSet(key: string, value: any, options?: { ex?: number }) {
  const clientInfo = await getRedisClient();
  if (!clientInfo) return false;
  
  try {
    if (clientInfo.type === 'vercel') {
      if (options?.ex) {
        await clientInfo.client.setex(key, options.ex, value);
      } else {
        await clientInfo.client.set(key, value);
      }
    } else {
      if (options?.ex) {
        await clientInfo.client.setex(key, options.ex, value);
      } else {
        await clientInfo.client.set(key, value);
      }
    }
    return true;
  } catch (error) {
    console.error("Redis SET error:", error);
    return false;
  }
}

export async function redisHset(key: string, field: string, value: any) {
  const clientInfo = await getRedisClient();
  if (!clientInfo) return false;
  
  try {
    if (clientInfo.type === 'vercel') {
      await clientInfo.client.hset(key, { [field]: value });
    } else {
      await clientInfo.client.hset(key, field, value);
    }
    return true;
  } catch (error) {
    console.error("Redis HSET error:", error);
    return false;
  }
}

export async function redisHgetall(key: string) {
  const clientInfo = await getRedisClient();
  if (!clientInfo) return null;
  
  try {
    return await clientInfo.client.hgetall(key);
  } catch (error) {
    console.error("Redis HGETALL error:", error);
    return null;
  }
}

export async function redisLpush(key: string, value: string) {
  const clientInfo = await getRedisClient();
  if (!clientInfo) return false;
  
  try {
    await clientInfo.client.lpush(key, value);
    return true;
  } catch (error) {
    console.error("Redis LPUSH error:", error);
    return false;
  }
}

export async function redisLrange(key: string, start: number, stop: number) {
  const clientInfo = await getRedisClient();
  if (!clientInfo) return [];
  
  try {
    return await clientInfo.client.lrange(key, start, stop);
  } catch (error) {
    console.error("Redis LRANGE error:", error);
    return [];
  }
}

export async function redisZincrby(key: string, increment: number, member: string) {
  const clientInfo = await getRedisClient();
  if (!clientInfo) return false;
  
  try {
    await clientInfo.client.zincrby(key, increment, member);
    return true;
  } catch (error) {
    console.error("Redis ZINCRBY error:", error);
    return false;
  }
}

export async function redisZrange(key: string, start: number, stop: number, options?: { rev?: boolean; withScores?: boolean }) {
  const clientInfo = await getRedisClient();
  if (!clientInfo) return [];
  
  try {
    if (clientInfo.type === 'vercel') {
      return await clientInfo.client.zrange(key, start, stop, options);
    } else {
      if (options?.rev) {
        return await clientInfo.client.zrevrange(key, start, stop, options?.withScores ? 'WITHSCORES' : undefined);
      } else {
        return await clientInfo.client.zrange(key, start, stop, options?.withScores ? 'WITHSCORES' : undefined);
      }
    }
  } catch (error) {
    console.error("Redis ZRANGE error:", error);
    return [];
  }
}
