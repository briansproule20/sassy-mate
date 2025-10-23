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
"[project]/sassy-mate/app/api/teams/lakers/upcoming/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/server.js [app-route] (ecmascript)");
;
const revalidate = 300; // Cache for 5 minutes
async function GET() {
    try {
        // Fetch Lakers schedule from ESPN API
        const scheduleRes = await fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/lal/schedule");
        if (!scheduleRes.ok) {
            throw new Error("Failed to fetch Lakers schedule");
        }
        const scheduleData = await scheduleRes.json();
        const events = scheduleData.events || [];
        // Find the next upcoming game
        const now = new Date();
        const upcomingGame = events.find((event)=>{
            const gameDate = new Date(event.date);
            return gameDate > now && event.competitions?.[0];
        });
        if (!upcomingGame) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data: {
                    nextGame: null,
                    lebronStatus: "No upcoming games scheduled"
                }
            });
        }
        const competition = upcomingGame.competitions[0];
        const competitors = competition.competitors || [];
        // Find Lakers and opponent
        const lakersTeam = competitors.find((c)=>c.team?.abbreviation === "LAL");
        const opponentTeam = competitors.find((c)=>c.team?.abbreviation !== "LAL");
        const nextGame = {
            id: upcomingGame.id,
            date: upcomingGame.date,
            datetime: upcomingGame.date,
            opponent: opponentTeam?.team?.displayName || "TBD",
            opponent_abbr: opponentTeam?.team?.abbreviation || "TBD",
            is_home: lakersTeam?.homeAway === "home",
            status: competition.status?.type?.shortDetail || "Scheduled"
        };
        // LeBron status - try to get from injuries data
        // For now, set manually based on latest reports
        // TODO: Parse ESPN injury reports when available
        const lebronStatus = "OUT (Sciatica) - Expected back mid-November";
        return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                nextGame,
                lebronStatus
            }
        });
    } catch (error) {
        console.error("Failed to fetch Lakers schedule:", error);
        // Fallback to hardcoded data
        return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                nextGame: {
                    id: 1,
                    date: "2024-10-25",
                    datetime: "2024-10-25T19:00:00-07:00",
                    opponent: "Phoenix Suns",
                    opponent_abbr: "PHX",
                    is_home: true,
                    status: "Scheduled"
                },
                lebronStatus: "OUT (Sciatica) - Expected back mid-November"
            }
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dba0f931._.js.map