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
"[project]/sassy-mate/app/api/teams/cavs/next-game/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/server.js [app-route] (ecmascript)");
;
const NBA_API_BASE = ("TURBOPACK compile-time value", "https://api.balldontlie.io/v1") || "https://api.balldontlie.io/v1";
const NBA_API_KEY = process.env.NBA_API_KEY;
let cachedCavsId = null;
const revalidate = 300; // Cache for 5 minutes
async function GET() {
    try {
        // Get Cavs team ID if not cached
        if (!cachedCavsId) {
            const teamRes = await fetch(`${NBA_API_BASE}/teams?search=Cavaliers`, {
                headers: {
                    Authorization: NBA_API_KEY || ""
                }
            });
            if (!teamRes.ok) throw new Error("Failed to fetch team");
            const teamData = await teamRes.json();
            if (teamData.data && teamData.data.length > 0) {
                cachedCavsId = teamData.data[0].id;
            } else {
                throw new Error("Cavs not found");
            }
        }
        const today = new Date().toISOString().split("T")[0];
        // Fetch next game
        const gamesRes = await fetch(`${NBA_API_BASE}/games?team_ids[]=${cachedCavsId}&start_date=${today}&per_page=1`, {
            headers: {
                Authorization: NBA_API_KEY || ""
            }
        });
        if (!gamesRes.ok) {
            throw new Error("Failed to fetch games");
        }
        const gamesData = await gamesRes.json();
        if (!gamesData.data || gamesData.data.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data: null,
                message: "No upcoming games found"
            });
        }
        const game = gamesData.data[0];
        const gameDate = new Date(game.date);
        return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                id: game.id,
                date: game.date,
                home_team: game.home_team?.full_name || "TBD",
                visitor_team: game.visitor_team?.full_name || "TBD",
                opponent: game.home_team?.id === cachedCavsId ? game.visitor_team?.full_name : game.home_team?.full_name,
                is_home: game.home_team?.id === cachedCavsId,
                status: game.status || "Scheduled",
                countdown_seconds: Math.max(0, Math.floor((gameDate.getTime() - Date.now()) / 1000))
            }
        });
    } catch (error) {
        console.error("Cavs next game API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Failed to fetch next game",
            data: null
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9048ef76._.js.map