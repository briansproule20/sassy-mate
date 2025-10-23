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
"[project]/sassy-mate/app/api/players/lebron/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/server.js [app-route] (ecmascript)");
;
// Recent game stats for LeBron (2024-25 season start)
const RECENT_GAMES = [
    {
        date: "2024-10-22",
        opponent: "MIN",
        pts: 16,
        reb: 5,
        ast: 4,
        stl: 2,
        blk: 1,
        tov: 3,
        min: "35",
        fg_pct: 0.467,
        fg3_pct: 0.250,
        ft_pct: 0.500
    },
    {
        date: "2024-10-25",
        opponent: "PHX",
        pts: 21,
        reb: 8,
        ast: 9,
        stl: 0,
        blk: 0,
        tov: 3,
        min: "35",
        fg_pct: 0.533,
        fg3_pct: 0.400,
        ft_pct: 0.750
    },
    {
        date: "2024-10-26",
        opponent: "SAC",
        pts: 32,
        reb: 14,
        ast: 10,
        stl: 1,
        blk: 0,
        tov: 3,
        min: "35",
        fg_pct: 0.619,
        fg3_pct: 0.500,
        ft_pct: 0.800
    },
    {
        date: "2024-10-28",
        opponent: "PHX",
        pts: 11,
        reb: 5,
        ast: 8,
        stl: 1,
        blk: 0,
        tov: 5,
        min: "32",
        fg_pct: 0.308,
        fg3_pct: 0.000,
        ft_pct: 1.000
    },
    {
        date: "2024-10-30",
        opponent: "CLE",
        pts: 26,
        reb: 6,
        ast: 7,
        stl: 1,
        blk: 0,
        tov: 5,
        min: "37",
        fg_pct: 0.500,
        fg3_pct: 0.333,
        ft_pct: 0.750
    }
];
const revalidate = 60; // Cache for 60 seconds
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data: RECENT_GAMES
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__db61b418._.js.map