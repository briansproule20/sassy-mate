module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/sassy-mate/app/api/witnesses/petitions/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/server.js [app-route] (ecmascript)");
;
const revalidate = 0; // Disable caching for real-time data
async function GET() {
    // Only use Redis in production
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        try {
            const { kv } = await __turbopack_context__.A("[project]/sassy-mate/node_modules/@vercel/kv/dist/index.js [app-route] (ecmascript, async loader)");
            // Fetch all petition IDs from Redis list
            const petitionIds = await kv.lrange("petitions", 0, -1);
            // Fetch each petition's data
            const petitions = await Promise.all(petitionIds.map(async (id)=>{
                const petition = await kv.hgetall(`petition:${id}`);
                return petition ? {
                    id,
                    ...petition
                } : null;
            }));
            // Filter out null values and sort by timestamp (newest first)
            const validPetitions = petitions.filter((p)=>p !== null).sort((a, b)=>b.timestamp - a.timestamp);
            return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data: validPetitions
            });
        } catch (error) {
            console.error("Failed to fetch petitions from Redis:", error);
        }
    }
    // Return empty array for local development
    return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data: [],
        message: "Redis not configured - using client-side storage"
    });
}
async function POST(request) {
    const body = await request.json();
    const { name, reason, goatScore, goatRank } = body;
    if (!name || !reason || goatScore === undefined) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Missing required fields"
        }, {
            status: 400
        });
    }
    // Only use Redis in production
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        try {
            const { kv } = await __turbopack_context__.A("[project]/sassy-mate/node_modules/@vercel/kv/dist/index.js [app-route] (ecmascript, async loader)");
            const petitionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            const timestamp = Date.now();
            // Store petition data
            await kv.hset(`petition:${petitionId}`, {
                name,
                reason,
                goatScore,
                goatRank: goatRank || "Witness",
                timestamp
            });
            // Add petition ID to list
            await kv.lpush("petitions", petitionId);
            // Update leaderboard (sorted set by points)
            await kv.zincrby("leaderboard", 10, name);
            // Update user data
            const existingUser = await kv.hgetall(`user:${name}`);
            await kv.hset(`user:${name}`, {
                lastSeen: new Date().toISOString(),
                petitionCount: (existingUser?.petitionCount || 0) + 1
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data: {
                    id: petitionId
                }
            });
        } catch (error) {
            console.error("Failed to create petition in Redis:", error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Failed to create petition"
            }, {
                status: 500
            });
        }
    }
    // For local development, return success (client will handle localStorage)
    return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data: {
            id: Date.now().toString()
        },
        message: "Redis not configured - using client-side storage"
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4e017093._.js.map