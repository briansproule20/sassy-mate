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
"[project]/sassy-mate/app/api/players/lebron/career/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/server.js [app-route] (ecmascript)");
;
// LeBron James career stats (as of 2024-25 season start)
// Source: Basketball-Reference.com
const LEBRON_CAREER_STATS = {
    career: {
        games_played: 1492,
        pts: "27.2",
        reb: "7.5",
        ast: "7.3",
        stl: "1.5",
        blk: "0.7",
        min: "38.6",
        fg_pct: "50.6",
        fg3_pct: "34.8",
        ft_pct: "73.5",
        total_pts: "40589",
        total_reb: "11185",
        total_ast: "10893"
    },
    seasons: [
        {
            season: 2003,
            games_played: 79,
            pts: 20.9,
            reb: 5.5,
            ast: 5.9,
            stl: 1.6,
            blk: 0.7,
            min: "39.5",
            fg_pct: 0.417,
            fg3_pct: 0.290,
            ft_pct: 0.754
        },
        {
            season: 2004,
            games_played: 80,
            pts: 27.2,
            reb: 7.4,
            ast: 7.2,
            stl: 2.2,
            blk: 0.7,
            min: "42.4",
            fg_pct: 0.472,
            fg3_pct: 0.351,
            ft_pct: 0.750
        },
        {
            season: 2005,
            games_played: 78,
            pts: 31.4,
            reb: 7.0,
            ast: 6.6,
            stl: 1.6,
            blk: 0.8,
            min: "42.5",
            fg_pct: 0.480,
            fg3_pct: 0.335,
            ft_pct: 0.738
        },
        {
            season: 2006,
            games_played: 78,
            pts: 27.3,
            reb: 6.7,
            ast: 6.0,
            stl: 1.6,
            blk: 0.7,
            min: "40.9",
            fg_pct: 0.476,
            fg3_pct: 0.335,
            ft_pct: 0.738
        },
        {
            season: 2007,
            games_played: 75,
            pts: 30.0,
            reb: 7.9,
            ast: 7.2,
            stl: 1.8,
            blk: 1.2,
            min: "40.4",
            fg_pct: 0.476,
            fg3_pct: 0.319,
            ft_pct: 0.698
        },
        {
            season: 2008,
            games_played: 75,
            pts: 28.4,
            reb: 7.6,
            ast: 7.2,
            stl: 1.7,
            blk: 1.1,
            min: "37.7",
            fg_pct: 0.484,
            fg3_pct: 0.315,
            ft_pct: 0.712
        },
        {
            season: 2009,
            games_played: 81,
            pts: 29.7,
            reb: 7.3,
            ast: 8.6,
            stl: 1.7,
            blk: 1.1,
            min: "37.7",
            fg_pct: 0.489,
            fg3_pct: 0.344,
            ft_pct: 0.780
        },
        {
            season: 2010,
            games_played: 76,
            pts: 26.7,
            reb: 7.5,
            ast: 7.0,
            stl: 1.6,
            blk: 1.0,
            min: "39.0",
            fg_pct: 0.503,
            fg3_pct: 0.333,
            ft_pct: 0.767
        },
        {
            season: 2011,
            games_played: 79,
            pts: 24.6,
            reb: 6.7,
            ast: 6.2,
            stl: 1.6,
            blk: 0.6,
            min: "38.8",
            fg_pct: 0.510,
            fg3_pct: 0.330,
            ft_pct: 0.759
        },
        {
            season: 2012,
            games_played: 62,
            pts: 27.1,
            reb: 7.9,
            ast: 6.2,
            stl: 1.9,
            blk: 0.8,
            min: "37.5",
            fg_pct: 0.531,
            fg3_pct: 0.362,
            ft_pct: 0.771
        },
        {
            season: 2013,
            games_played: 76,
            pts: 26.8,
            reb: 8.0,
            ast: 7.3,
            stl: 1.7,
            blk: 0.9,
            min: "37.9",
            fg_pct: 0.565,
            fg3_pct: 0.406,
            ft_pct: 0.753
        },
        {
            season: 2014,
            games_played: 77,
            pts: 27.1,
            reb: 6.9,
            ast: 6.3,
            stl: 1.6,
            blk: 0.3,
            min: "37.7",
            fg_pct: 0.567,
            fg3_pct: 0.379,
            ft_pct: 0.750
        },
        {
            season: 2015,
            games_played: 69,
            pts: 25.3,
            reb: 6.0,
            ast: 7.4,
            stl: 1.6,
            blk: 0.7,
            min: "36.1",
            fg_pct: 0.488,
            fg3_pct: 0.354,
            ft_pct: 0.710
        },
        {
            season: 2016,
            games_played: 76,
            pts: 25.3,
            reb: 7.4,
            ast: 6.8,
            stl: 1.4,
            blk: 0.6,
            min: "35.6",
            fg_pct: 0.520,
            fg3_pct: 0.309,
            ft_pct: 0.731
        },
        {
            season: 2017,
            games_played: 74,
            pts: 26.4,
            reb: 8.6,
            ast: 8.7,
            stl: 1.2,
            blk: 0.6,
            min: "37.8",
            fg_pct: 0.548,
            fg3_pct: 0.363,
            ft_pct: 0.674
        },
        {
            season: 2018,
            games_played: 55,
            pts: 27.5,
            reb: 8.6,
            ast: 9.1,
            stl: 1.3,
            blk: 0.9,
            min: "36.9",
            fg_pct: 0.542,
            fg3_pct: 0.367,
            ft_pct: 0.731
        },
        {
            season: 2019,
            games_played: 67,
            pts: 25.3,
            reb: 7.8,
            ast: 10.2,
            stl: 1.2,
            blk: 0.6,
            min: "34.6",
            fg_pct: 0.510,
            fg3_pct: 0.348,
            ft_pct: 0.693
        },
        {
            season: 2020,
            games_played: 45,
            pts: 25.0,
            reb: 7.7,
            ast: 7.8,
            stl: 1.2,
            blk: 0.5,
            min: "34.9",
            fg_pct: 0.493,
            fg3_pct: 0.348,
            ft_pct: 0.693
        },
        {
            season: 2021,
            games_played: 56,
            pts: 25.0,
            reb: 7.7,
            ast: 7.8,
            stl: 1.1,
            blk: 0.6,
            min: "33.4",
            fg_pct: 0.513,
            fg3_pct: 0.365,
            ft_pct: 0.698
        },
        {
            season: 2022,
            games_played: 56,
            pts: 30.3,
            reb: 8.2,
            ast: 6.2,
            stl: 1.3,
            blk: 1.1,
            min: "37.2",
            fg_pct: 0.524,
            fg3_pct: 0.356,
            ft_pct: 0.756
        },
        {
            season: 2023,
            games_played: 71,
            pts: 28.9,
            reb: 8.3,
            ast: 6.8,
            stl: 0.9,
            blk: 0.6,
            min: "35.5",
            fg_pct: 0.500,
            fg3_pct: 0.410,
            ft_pct: 0.750
        }
    ]
};
const revalidate = 3600; // Cache for 1 hour
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data: LEBRON_CAREER_STATS
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__688adaac._.js.map