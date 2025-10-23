(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sassy-mate/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "generateId",
    ()=>generateId,
    "getInitials",
    ()=>getInitials,
    "getTimeUntil",
    ()=>getTimeUntil,
    "numberFormat",
    ()=>numberFormat,
    "pct",
    ()=>pct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function numberFormat(num, decimals = 1) {
    return num.toFixed(decimals);
}
function pct(made, attempted) {
    if (attempted === 0) return 0;
    return made / attempted * 100;
}
function formatDate(date) {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}
function getTimeUntil(targetDate) {
    const now = new Date().getTime();
    const target = targetDate.getTime();
    const total = target - now;
    if (total <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            total: 0
        };
    }
    return {
        days: Math.floor(total / (1000 * 60 * 60 * 24)),
        hours: Math.floor(total % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes: Math.floor(total % (1000 * 60 * 60) / (1000 * 60)),
        seconds: Math.floor(total % (1000 * 60) / 1000),
        total
    };
}
function generateId() {
    return Math.random().toString(36).substring(2, 15);
}
function getInitials(name) {
    return name.split(" ").map((n)=>n[0]).join("").toUpperCase().slice(0, 2);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-cavs-gold text-cavs-navy hover:bg-cavs-gold/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border-2 border-cavs-wine text-cavs-wine bg-transparent hover:bg-cavs-wine hover:text-white",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/button.tsx",
        lineNumber: 41,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
"use client";
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top_left,theme(colors.cavs.wine),#2b0f19_40%,#000)] grain",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-20 right-20 text-cavs-gold opacity-20",
                animate: {
                    y: [
                        0,
                        -20,
                        0
                    ],
                    rotate: [
                        0,
                        10,
                        0
                    ]
                },
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                    size: 120
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/hero.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sassy-mate/components/hero.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-40 left-20 text-cavs-wine opacity-20",
                animate: {
                    y: [
                        0,
                        15,
                        0
                    ],
                    rotate: [
                        0,
                        -10,
                        0
                    ]
                },
                transition: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                    size: 100
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/hero.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sassy-mate/components/hero.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center px-4 max-w-5xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        className: "font-display text-7xl md:text-9xl font-bold text-cavs-gold mb-6",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        children: "THE WITNESS HUB"
                    }, void 0, false, {
                        fileName: "[project]/sassy-mate/components/hero.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "text-xl md:text-2xl text-cavs-navy mb-12 max-w-2xl mx-auto",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.2
                        },
                        children: "Your ultimate Cleveland Cavaliers and LeBron James shrine. Because greatness demands recognition."
                    }, void 0, false, {
                        fileName: "[project]/sassy-mate/components/hero.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex flex-wrap gap-4 justify-center",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.4
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "lg",
                            className: "text-lg px-8 py-6",
                            onClick: ()=>document.getElementById("petition")?.scrollIntoView({
                                    behavior: "smooth"
                                }),
                            children: "Become a Witness"
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/hero.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sassy-mate/components/hero.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sassy-mate/components/hero.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-10 left-1/2 -translate-x-1/2",
                animate: {
                    y: [
                        0,
                        10,
                        0
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-cavs-gold/50 text-sm",
                    children: "Scroll to explore"
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/hero.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sassy-mate/components/hero.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sassy-mate/components/hero.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
const SheetContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    open: false,
    setOpen: ()=>{}
});
function Sheet({ children, open: controlledOpen, onOpenChange }) {
    _s();
    const [uncontrolledOpen, setUncontrolledOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = onOpenChange ?? setUncontrolledOpen;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetContext.Provider, {
        value: {
            open,
            setOpen
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Sheet, "0FWFzyi1tqoOPbnH/mky0+VtF4s=");
_c = Sheet;
function SheetTrigger({ children, className, ...props }) {
    _s1();
    const { setOpen } = __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SheetContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        onClick: ()=>setOpen(true),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/sheet.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s1(SheetTrigger, "rHm3KA2gg8gOIIgF6iNS+uysiw8=");
_c1 = SheetTrigger;
function SheetContent({ children, className, side = "right" }) {
    _s2();
    const { open, setOpen } = __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SheetContext);
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/80",
                onClick: ()=>setOpen(false)
            }, void 0, false, {
                fileName: "[project]/sassy-mate/components/ui/sheet.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed z-50 gap-4 bg-white p-6 shadow-xl transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "inset-y-0 right-0 h-full w-80 border-l border-slate-200", side === "left" && "inset-y-0 left-0 h-full w-80 border-r border-slate-200", className),
                "data-state": open ? "open" : "closed",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpen(false),
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/sassy-mate/components/ui/sheet.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/sassy-mate/components/ui/sheet.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sassy-mate/components/ui/sheet.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/sassy-mate/components/ui/sheet.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(SheetContent, "VpbSSxC/M+z7dVARcY658GIy3+c=");
_c2 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/sheet.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c3 = SheetHeader;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/sheet.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c4 = SheetTitle;
function SheetClose({ children, asChild = false, ...props }) {
    _s3();
    const { setOpen } = __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SheetContext);
    if (asChild && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ...props,
            onClick: (e)=>{
                setOpen(false);
                children.props.onClick?.(e);
            }
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...props,
        onClick: (e)=>{
            setOpen(false);
            props.onClick?.(e);
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/sheet.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s3(SheetClose, "rHm3KA2gg8gOIIgF6iNS+uysiw8=");
_c5 = SheetClose;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetTitle");
__turbopack_context__.k.register(_c5, "SheetClose");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: decorative ? "none" : "separator",
        "aria-orientation": orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/separator.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Separator;
Separator.displayName = "Separator";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/site-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteNav",
    ()=>SiteNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const navLinks = [
    {
        href: "/",
        label: "Home",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        description: "Main dashboard"
    },
    {
        href: "/stats",
        label: "Stats",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        description: "LeBron's career stats"
    },
    {
        href: "/witnesses",
        label: "Witnesses",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"],
        description: "Hall of fame believers"
    },
    {
        href: "/gallery",
        label: "Gallery",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
        description: "Photo gallery"
    },
    {
        href: "/compare",
        label: "Compare",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        description: "Player comparison"
    }
];
function SiteNav() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "max-w-7xl mx-auto px-4 h-16 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-3 group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/icons/witnesshub favicon.png",
                            alt: "Witness Hub",
                            width: 40,
                            height: 40,
                            className: "transition-opacity group-hover:opacity-80"
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/site-nav.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display text-xl text-cavs-wine",
                            children: "WITNESS HUB"
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/site-nav.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sassy-mate/components/site-nav.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                    open: open,
                    onOpenChange: setOpen,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                            className: "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors hover:bg-slate-100 h-10 w-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-6 h-6 text-cavs-wine"
                                }, void 0, false, {
                                    fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Open menu"
                                }, void 0, false, {
                                    fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sassy-mate/components/site-nav.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                            side: "right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                                    className: "text-left pb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                        className: "flex items-center gap-2 text-cavs-wine font-display text-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/icons/witnesshub favicon.png",
                                                alt: "Witness Hub",
                                                width: 28,
                                                height: 28
                                            }, void 0, false, {
                                                fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            "WITNESS HUB"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                    className: "my-4"
                                }, void 0, false, {
                                    fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "flex flex-col gap-1",
                                    children: navLinks.map((link)=>{
                                        const Icon = link.icon;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetClose"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "flex items-start gap-3 rounded-lg px-3 py-3 text-slate-700 hover:bg-slate-100 hover:text-cavs-wine transition-all group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-5 h-5 mt-0.5 text-slate-500 group-hover:text-cavs-wine transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-base",
                                                                children: link.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                                                lineNumber: 70,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-slate-500",
                                                                children: link.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                                lineNumber: 64,
                                                columnNumber: 21
                                            }, this)
                                        }, link.href, false, {
                                            fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                    className: "my-6"
                                }, void 0, false, {
                                    fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-gradient-to-br from-cavs-wine to-cavs-navy p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-display text-lg mb-1 text-white",
                                            children: "ALL HAIL"
                                        }, void 0, false, {
                                            fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/90",
                                            children: "The King. The GOAT. LeBron James."
                                        }, void 0, false, {
                                            fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sassy-mate/components/site-nav.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sassy-mate/components/site-nav.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sassy-mate/components/site-nav.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sassy-mate/components/site-nav.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/site-nav.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(SiteNav, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = SiteNav;
var _c;
__turbopack_context__.k.register(_c, "SiteNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/card.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/card.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/card.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/card.tsx",
        lineNumber: 70,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-cavs-navy text-cavs-gold hover:bg-cavs-navy/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/badge.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/goat-arguments.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoatArguments",
    ()=>GoatArguments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const tabs = [
    {
        id: "longevity",
        label: "Longevity",
        content: "21 seasons and counting. From high school phenom to oldest player scoring 40+. The man is literally aging backwards.",
        stats: [
            "40,000+ points",
            "21 All-Star",
            "19 All-NBA"
        ]
    },
    {
        id: "versatility",
        label: "Versatility",
        content: "Can guard 1-5. Can play 1-5. Can pass like Magic, score like Jordan, defend like Pippen. The ultimate Swiss Army knife.",
        stats: [
            "6'9\" Point Forward",
            "Top 10 assists all-time",
            "All-Defense 6x"
        ]
    },
    {
        id: "playmaking",
        label: "Playmaking",
        content: "LeBron makes everyone better. His teams consistently overperform. His IQ is off the charts. He's a floor general and a head coach.",
        stats: [
            "10,000+ assists",
            "Triple-doubles",
            "Court vision"
        ]
    },
    {
        id: "impact",
        label: "Impact",
        content: "Brought Cleveland its first championship in 52 years. Beat a 73-win team. Changed teams' fortunes instantly. Cultural icon.",
        stats: [
            "3-1 comeback",
            "4 rings",
            "4 MVPs"
        ]
    },
    {
        id: "clutch",
        label: "Clutch Gene",
        content: "Game 7 vs Warriors. Block on Iguodala. Game 6 vs Celtics. The man shows up when it matters most. 'He's not clutch' - biggest lie ever told.",
        stats: [
            "Game 7 dominance",
            "Playoff record 40+ games",
            "Finals performances"
        ]
    },
    {
        id: "leadership",
        label: "Leadership",
        content: "Built the I Promise School. Spoke up for social justice. Changed the game on and off the court. More than an athlete - a generational leader.",
        stats: [
            "Community impact",
            "Player empowerment",
            "Cultural influence"
        ]
    }
];
function GoatArguments() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("longevity");
    const activeContent = tabs.find((t)=>t.id === activeTab);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "goat",
        className: "py-20 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-5xl text-center mb-4 text-cavs-wine",
                    children: "WHY LEBRON IS THE GOAT"
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-slate-600 mb-12",
                    children: "Let's break it down, category by category"
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2 justify-center mb-8",
                    children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: activeTab === tab.id ? "default" : "outline",
                            onClick: ()=>setActiveTab(tab.id),
                            children: tab.label
                        }, tab.id, false, {
                            fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "min-h-[280px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-cavs-wine text-2xl",
                                children: activeContent?.label
                            }, void 0, false, {
                                fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg mb-6 leading-relaxed",
                                    children: activeContent?.content
                                }, void 0, false, {
                                    fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mt-auto",
                                    children: activeContent?.stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            className: "text-sm",
                                            children: stat
                                        }, i, false, {
                                            fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/goat-arguments.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(GoatArguments, "ZyjQOH/l62vHqkLXPnvqQVa2MIU=");
_c = GoatArguments;
var _c;
__turbopack_context__.k.register(_c, "GoatArguments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/lib/bron-history.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"1-1\":{\"year\":2009,\"event\":\"LeBron drops 38 points on New Year's Day to beat the Bobcats. Starts the year with a bang.\",\"category\":\"game\"},\"1-2\":{\"year\":2020,\"event\":\"LeBron posts a triple-double and reminds everyone he's still the best player on the planet.\",\"category\":\"game\"},\"1-3\":{\"year\":2023,\"event\":\"LeBron probably had avocado toast for breakfast. Revolutionary.\",\"category\":\"funny\"},\"1-4\":{\"year\":2018,\"event\":\"LeBron scores 30+ for the 1000th time in his career. Just casual GOAT things.\",\"category\":\"milestone\"},\"1-5\":{\"year\":2021,\"event\":\"LeBron tweets something cryptic. NBA Twitter loses its mind for 48 hours.\",\"category\":\"funny\"},\"1-6\":{\"year\":2019,\"event\":\"LeBron watches Bronny's game and scouts better than half the league's GMs.\",\"category\":\"funny\"},\"1-7\":{\"year\":2022,\"event\":\"LeBron posts 'Taco Tuesday' content. The internet breaks.\",\"category\":\"funny\"},\"1-8\":{\"year\":2017,\"event\":\"LeBron records his 65th career triple-double, passing Larry Bird.\",\"category\":\"milestone\"},\"1-9\":{\"year\":2015,\"event\":\"LeBron drops 36-8-7 against the Clippers in a battle of titans.\",\"category\":\"game\"},\"1-10\":{\"year\":2020,\"event\":\"LeBron sips wine before the game. Opponents already defeated mentally.\",\"category\":\"funny\"},\"1-11\":{\"year\":2016,\"event\":\"LeBron posts another efficient 25+ point game because that's just Tuesday for him.\",\"category\":\"game\"},\"1-12\":{\"year\":2018,\"event\":\"LeBron wears a pair of shoes worth more than your car to the arena.\",\"category\":\"funny\"},\"1-13\":{\"year\":2019,\"event\":\"LeBron reads a book on the plane. Somehow this makes ESPN headlines.\",\"category\":\"funny\"},\"1-14\":{\"year\":2017,\"event\":\"LeBron scores 20+ points in his 800th consecutive game. Consistency is his middle name.\",\"category\":\"milestone\"},\"1-15\":{\"year\":2021,\"event\":\"LeBron posts a workout video at 5am. You're still asleep.\",\"category\":\"funny\"},\"1-16\":{\"year\":2010,\"event\":\"LeBron wins Eastern Conference Player of the Month for the 18th time.\",\"category\":\"milestone\"},\"1-17\":{\"year\":2022,\"event\":\"LeBron goes to Savannah's Instagram and drops a fire emoji. Couple goals.\",\"category\":\"funny\"},\"1-18\":{\"year\":2014,\"event\":\"LeBron drops 32-10-7 because a normal statline is too boring.\",\"category\":\"game\"},\"1-19\":{\"year\":2023,\"event\":\"LeBron breaks another record that people said was unbreakable.\",\"category\":\"milestone\"},\"1-20\":{\"year\":2019,\"event\":\"LeBron sits courtside at a Lakers game. Wait, he IS a Laker. Mind blown.\",\"category\":\"funny\"},\"1-21\":{\"year\":2015,\"event\":\"LeBron becomes the 3rd youngest to 24,000 points. Jordan who?\",\"category\":\"milestone\"},\"1-22\":{\"year\":2020,\"event\":\"LeBron eulogizes Kobe at Staples Center. Not a dry eye in the building.\",\"category\":\"moment\"},\"1-23\":{\"year\":2018,\"event\":\"LeBron ties Michael Jordan with his 866th consecutive game with 10+ points.\",\"category\":\"milestone\"},\"1-24\":{\"year\":2021,\"event\":\"LeBron wears a Kobe jersey to warmups. Mamba Forever.\",\"category\":\"moment\"},\"1-25\":{\"year\":2019,\"event\":\"LeBron passes MJ for 4th all-time in scoring. Casually, in Philly.\",\"category\":\"milestone\"},\"1-26\":{\"year\":2023,\"event\":\"LeBron hosts a watch party for the Super Bowl. His snack game is undefeated.\",\"category\":\"funny\"},\"1-27\":{\"year\":2016,\"event\":\"LeBron posts his 49th career triple-double. Just another day at the office.\",\"category\":\"game\"},\"1-28\":{\"year\":2022,\"event\":\"LeBron complains about a call. He was right. Refs in shambles.\",\"category\":\"funny\"},\"1-29\":{\"year\":2020,\"event\":\"LeBron plays with Bronny on Instagram Live. Father-son bonding goals.\",\"category\":\"moment\"},\"1-30\":{\"year\":2017,\"event\":\"LeBron drops 33-10-6 and reminds everyone he's on another level.\",\"category\":\"game\"},\"1-31\":{\"year\":2019,\"event\":\"LeBron posts 'Just a kid from Akron' on Instagram. We cry.\",\"category\":\"moment\"},\"2-1\":{\"year\":2015,\"event\":\"LeBron scores 42 points in a win. February starts with a bang.\",\"category\":\"game\"},\"2-2\":{\"year\":2018,\"event\":\"LeBron makes his 13th straight All-Star team. Clock is automatic.\",\"category\":\"milestone\"},\"2-3\":{\"year\":2020,\"event\":\"LeBron practices his signature chalk toss. Still perfect after 20 years.\",\"category\":\"funny\"},\"2-4\":{\"year\":2016,\"event\":\"LeBron posts a 30-point triple-double because regular 30-point games are too easy.\",\"category\":\"game\"},\"2-5\":{\"year\":2019,\"event\":\"LeBron dunks on someone half his age. Father Time is terrified.\",\"category\":\"game\"},\"2-6\":{\"year\":2021,\"event\":\"LeBron changes his Twitter profile pic. Millions adjust accordingly.\",\"category\":\"funny\"},\"2-7\":{\"year\":2023,\"event\":\"LeBron breaks the all-time scoring record. GOAT status: CONFIRMED.\",\"category\":\"milestone\"},\"2-8\":{\"year\":2017,\"event\":\"LeBron scores 23 points in 23 minutes. Numerology is undefeated.\",\"category\":\"game\"},\"2-9\":{\"year\":2020,\"event\":\"LeBron adjusts his headband. ESPN does a 30-minute segment on it.\",\"category\":\"funny\"},\"2-10\":{\"year\":2018,\"event\":\"LeBron gets his 7th triple-double of the season before All-Star break.\",\"category\":\"game\"},\"2-11\":{\"year\":2013,\"event\":\"LeBron scores 32 points on his way to a historic win streak with Miami.\",\"category\":\"game\"},\"2-12\":{\"year\":2019,\"event\":\"LeBron posts a photo with a book. Suddenly everyone's reading.\",\"category\":\"funny\"},\"2-13\":{\"year\":2022,\"event\":\"LeBron sends Savannah flowers. The bar for husbands has been raised.\",\"category\":\"funny\"},\"2-14\":{\"year\":2015,\"event\":\"LeBron drops 42-5-6 on Valentine's Day. His only love is winning.\",\"category\":\"game\"},\"2-15\":{\"year\":2020,\"event\":\"LeBron makes his 16th All-Star team. Still snubbed in 2008.\",\"category\":\"milestone\"},\"2-16\":{\"year\":2019,\"event\":\"LeBron sits out. His team loses by 40. Point proven.\",\"category\":\"funny\"},\"2-17\":{\"year\":2018,\"event\":\"LeBron Team LeBron defeats Team Stephen in the All-Star Game.\",\"category\":\"game\"},\"2-18\":{\"year\":2007,\"event\":\"LeBron wins his first All-Star Game MVP. The first of many.\",\"category\":\"milestone\"},\"2-19\":{\"year\":2021,\"event\":\"LeBron posts workout content. Gym rats everywhere feel inadequate.\",\"category\":\"funny\"},\"2-20\":{\"year\":2016,\"event\":\"LeBron records his 50th career triple-double. Half a hundred.\",\"category\":\"milestone\"},\"2-21\":{\"year\":2019,\"event\":\"LeBron wears a Thom Browne suit that costs more than college tuition.\",\"category\":\"funny\"},\"2-22\":{\"year\":2014,\"event\":\"LeBron drops 30-10-7 in his sleep. Well, almost.\",\"category\":\"game\"},\"2-23\":{\"year\":2020,\"event\":\"LeBron pays tribute to Kobe on 2/23. Not a dry eye anywhere.\",\"category\":\"moment\"},\"2-24\":{\"year\":2021,\"event\":\"Kobe's jersey retirement day. LeBron honors the Mamba.\",\"category\":\"moment\"},\"2-25\":{\"year\":2017,\"event\":\"LeBron passes 28,000 career points. Still counting.\",\"category\":\"milestone\"},\"2-26\":{\"year\":2019,\"event\":\"LeBron activates playoff mode. League on notice.\",\"category\":\"funny\"},\"2-27\":{\"year\":2015,\"event\":\"LeBron scores 27-13-6. Those are video game numbers.\",\"category\":\"game\"},\"2-28\":{\"year\":2018,\"event\":\"LeBron ends February with another 30+ point game. Routine.\",\"category\":\"game\"},\"2-29\":{\"year\":2024,\"event\":\"Leap Day LeBron hits different. Scores 30+ because it's a special occasion.\",\"category\":\"game\"},\"3-1\":{\"year\":2014,\"event\":\"LeBron wins Eastern Conference Player of the Month. Again.\",\"category\":\"milestone\"},\"3-2\":{\"year\":2019,\"event\":\"LeBron arrives at Staples in a custom Rolls Royce. Kings move different.\",\"category\":\"funny\"},\"3-3\":{\"year\":2016,\"event\":\"LeBron records back-to-back triple-doubles because one isn't enough.\",\"category\":\"game\"},\"3-4\":{\"year\":2020,\"event\":\"LeBron posts a picture with a glass of wine. Classy as always.\",\"category\":\"funny\"},\"3-5\":{\"year\":2017,\"event\":\"LeBron reaches 28,000 career points. The journey continues.\",\"category\":\"milestone\"},\"3-6\":{\"year\":2015,\"event\":\"LeBron drops 37-8-7 in Madison Square Garden. Broadway Bron.\",\"category\":\"game\"},\"3-7\":{\"year\":2021,\"event\":\"LeBron tweets 'Live.Laugh.Love' after a win. Meme accounts rejoice.\",\"category\":\"funny\"},\"3-8\":{\"year\":2018,\"event\":\"LeBron scores 46 points against the Pacers. March Madness starts early.\",\"category\":\"game\"},\"3-9\":{\"year\":2019,\"event\":\"LeBron wears shorts in 40-degree weather. Built different.\",\"category\":\"funny\"},\"3-10\":{\"year\":2016,\"event\":\"LeBron passes 26,000 career points. The climb never stops.\",\"category\":\"milestone\"},\"3-11\":{\"year\":2022,\"event\":\"LeBron eats a pregame banana. Everyone analyzes his nutrition.\",\"category\":\"funny\"},\"3-12\":{\"year\":2014,\"event\":\"LeBron notches his 40th career triple-double. Casual excellence.\",\"category\":\"milestone\"},\"3-13\":{\"year\":2020,\"event\":\"LeBron leads Lakers to another W before the COVID shutdown.\",\"category\":\"game\"},\"3-14\":{\"year\":2019,\"event\":\"Pi Day. LeBron scores 31.4 points. Math is undefeated.\",\"category\":\"funny\"},\"3-15\":{\"year\":2017,\"event\":\"Ides of March. LeBron betrays the Celtics with 36 points.\",\"category\":\"game\"},\"3-16\":{\"year\":2021,\"event\":\"LeBron watches March Madness and predicts every upset correctly.\",\"category\":\"funny\"},\"3-17\":{\"year\":2018,\"event\":\"St. Patrick's Day. LeBron drops 40 in Celtics green. Ironic.\",\"category\":\"game\"},\"3-18\":{\"year\":2015,\"event\":\"LeBron passes Kevin Garnett on the all-time scoring list.\",\"category\":\"milestone\"},\"3-19\":{\"year\":2020,\"event\":\"LeBron begins his wine collection. Future sommelier.\",\"category\":\"funny\"},\"3-20\":{\"year\":2016,\"event\":\"LeBron scores 25+ in his 750th career game. Consistency king.\",\"category\":\"milestone\"},\"3-21\":{\"year\":2019,\"event\":\"First day of spring. LeBron blooms with a 35-point performance.\",\"category\":\"game\"},\"3-22\":{\"year\":2022,\"event\":\"LeBron does a pregame dance. TikTok users everywhere try to copy it.\",\"category\":\"funny\"},\"3-23\":{\"year\":2017,\"event\":\"LeBron records triple-double number 57. Lucky number.\",\"category\":\"game\"},\"3-24\":{\"year\":2018,\"event\":\"LeBron passes 31,000 career points. Still climbing.\",\"category\":\"milestone\"},\"3-25\":{\"year\":2021,\"event\":\"LeBron posts 'Taco Tuesday' throwback. We miss those days.\",\"category\":\"funny\"},\"3-26\":{\"year\":2015,\"event\":\"LeBron notches his 44th career triple-double in a win over Philly.\",\"category\":\"game\"},\"3-27\":{\"year\":2020,\"event\":\"LeBron works out during COVID lockdown. His IG story is motivational AF.\",\"category\":\"funny\"},\"3-28\":{\"year\":2016,\"event\":\"LeBron scores 30+ against the Bucks. Giannis takes notes.\",\"category\":\"game\"},\"3-29\":{\"year\":2019,\"event\":\"LeBron misses a game. ESPN does 24/7 coverage on his injury.\",\"category\":\"funny\"},\"3-30\":{\"year\":2017,\"event\":\"LeBron closes out March with a statement 40-piece.\",\"category\":\"game\"},\"3-31\":{\"year\":2014,\"event\":\"LeBron says 'It's just another game' then drops 35-8-7.\",\"category\":\"game\"},\"4-1\":{\"year\":2019,\"event\":\"April Fools. LeBron tweets he's retiring. The internet has a meltdown.\",\"category\":\"funny\"},\"4-2\":{\"year\":2018,\"event\":\"LeBron clinches another playoff berth. Streak continues.\",\"category\":\"milestone\"},\"4-3\":{\"year\":2016,\"event\":\"LeBron drops 27-8-8 as the playoffs approach. Getting warmed up.\",\"category\":\"game\"},\"4-4\":{\"year\":2020,\"event\":\"LeBron posts a throwback photo. Nostalgia hits hard.\",\"category\":\"funny\"},\"4-5\":{\"year\":2017,\"event\":\"LeBron scores 30+ in his 400th game as a Cav. Hometown hero.\",\"category\":\"milestone\"},\"4-6\":{\"year\":2015,\"event\":\"LeBron notches triple-double number 42. The answer to everything.\",\"category\":\"game\"},\"4-7\":{\"year\":2021,\"event\":\"LeBron changes his jersey number to 6. New era begins.\",\"category\":\"moment\"},\"4-8\":{\"year\":2019,\"event\":\"LeBron misses the playoffs for the first time since 2005. Still averaging 27-8-8.\",\"category\":\"moment\"},\"4-9\":{\"year\":2016,\"event\":\"LeBron rests before playoffs. ESPN: 'Is LeBron afraid?'\",\"category\":\"funny\"},\"4-10\":{\"year\":2018,\"event\":\"LeBron prepares for his 14th straight playoff run. Unreal consistency.\",\"category\":\"milestone\"},\"4-11\":{\"year\":2022,\"event\":\"LeBron likes a tweet about GOAT debates. Subliminal king.\",\"category\":\"funny\"},\"4-12\":{\"year\":2015,\"event\":\"LeBron ends regular season with 25.3 PPG. Another elite year.\",\"category\":\"milestone\"},\"4-13\":{\"year\":2020,\"event\":\"LeBron posts workout footage. Still training during pandemic.\",\"category\":\"funny\"},\"4-14\":{\"year\":2017,\"event\":\"LeBron finishes season averaging a near triple-double. Westbrook who?\",\"category\":\"milestone\"},\"4-15\":{\"year\":2019,\"event\":\"Playoff LeBron begins hibernation. He'll be back.\",\"category\":\"funny\"},\"4-16\":{\"year\":2016,\"event\":\"LeBron starts playoff run that leads to championship.\",\"category\":\"moment\"},\"4-17\":{\"year\":2021,\"event\":\"LeBron announces he'll play in play-in tournament. Makes it must-see TV.\",\"category\":\"moment\"},\"4-18\":{\"year\":2018,\"event\":\"Playoff LeBron debuts with 35-10-7. Different beast.\",\"category\":\"game\"},\"4-19\":{\"year\":2015,\"event\":\"LeBron drops 44 in playoff opener. Activated.\",\"category\":\"game\"},\"4-20\":{\"year\":2019,\"event\":\"LeBron posts on 4/20. Memes everywhere.\",\"category\":\"funny\"},\"4-21\":{\"year\":2014,\"event\":\"LeBron scores 32 in Game 1 vs Bobcats. Playoff mode engaged.\",\"category\":\"game\"},\"4-22\":{\"year\":2020,\"event\":\"LeBron's birthday week. He gifts US playoff performances every year.\",\"category\":\"funny\"},\"4-23\":{\"year\":2017,\"event\":\"LeBron records playoff triple-double number 17. Playoff mode different.\",\"category\":\"game\"},\"4-24\":{\"year\":2021,\"event\":\"LeBron wears #24 warmup shirt for Kobe. Forever honoring Mamba.\",\"category\":\"moment\"},\"4-25\":{\"year\":2016,\"event\":\"LeBron drops 27-8-4 in playoff Game 4. Sweep incoming.\",\"category\":\"game\"},\"4-26\":{\"year\":2018,\"event\":\"LeBron hits game-winner against Pacers. Buzzer beater king.\",\"category\":\"game\"},\"4-27\":{\"year\":2015,\"event\":\"LeBron dominates Celtics with 31-11-6 in the playoffs.\",\"category\":\"game\"},\"4-28\":{\"year\":2020,\"event\":\"LeBron practices his wine pairing skills. Renaissance man.\",\"category\":\"funny\"},\"4-29\":{\"year\":2019,\"event\":\"LeBron watches the playoffs from home. Weirdest timeline.\",\"category\":\"funny\"},\"4-30\":{\"year\":2016,\"event\":\"LeBron closes out April with another playoff W. May is coming.\",\"category\":\"game\"},\"5-1\":{\"year\":2018,\"event\":\"May Day. LeBron sends distress signal with 43-point playoff game.\",\"category\":\"game\"},\"5-2\":{\"year\":2017,\"event\":\"LeBron scores 39 in Game 1 against Raptors. LeBronto begins.\",\"category\":\"game\"},\"5-3\":{\"year\":2015,\"event\":\"LeBron drops 30-11-6 in playoff Game 2. Routine excellence.\",\"category\":\"game\"},\"5-4\":{\"year\":2020,\"event\":\"May the Fourth. LeBron channels Jedi energy. Force is strong.\",\"category\":\"funny\"},\"5-5\":{\"year\":2016,\"event\":\"Cinco de Mayo. LeBron celebrates with a playoff victory.\",\"category\":\"game\"},\"5-6\":{\"year\":2019,\"event\":\"LeBron posts vacation photos. Living his best life.\",\"category\":\"funny\"},\"5-7\":{\"year\":2018,\"event\":\"LeBron drops 42 points against Raptors. LeBronto intensifies.\",\"category\":\"game\"},\"5-8\":{\"year\":2014,\"event\":\"LeBron advances to conference semis. As expected.\",\"category\":\"milestone\"},\"5-9\":{\"year\":2021,\"event\":\"LeBron posts 'Motivated' on Twitter. League is terrified.\",\"category\":\"funny\"},\"5-10\":{\"year\":2016,\"event\":\"LeBron notches playoff triple-double. May dominance continues.\",\"category\":\"game\"},\"5-11\":{\"year\":2020,\"event\":\"LeBron does a Peloton ride. Makes it look easy.\",\"category\":\"funny\"},\"5-12\":{\"year\":2017,\"event\":\"LeBron scores 35+ in playoff win. Celtics in shambles.\",\"category\":\"game\"},\"5-13\":{\"year\":2015,\"event\":\"LeBron leads Cavs to conference finals. Road to ship begins.\",\"category\":\"milestone\"},\"5-14\":{\"year\":2018,\"event\":\"LeBron drops 44-5-3 in Game 1 vs Celtics. Daddy's home.\",\"category\":\"game\"},\"5-15\":{\"year\":2019,\"event\":\"LeBron posts a pic with Dwyane Wade. Bromance forever.\",\"category\":\"funny\"},\"5-16\":{\"year\":2016,\"event\":\"LeBron notches 30-9-7 in conference finals. On a mission.\",\"category\":\"game\"},\"5-17\":{\"year\":2022,\"event\":\"LeBron announces new business venture. Billionaire Bron incoming.\",\"category\":\"moment\"},\"5-18\":{\"year\":2014,\"event\":\"LeBron drops 29 in pivotal playoff game. Clutch gene activated.\",\"category\":\"game\"},\"5-19\":{\"year\":2020,\"event\":\"LeBron posts 'Miss the game' on IG. We miss watching him.\",\"category\":\"funny\"},\"5-20\":{\"year\":2017,\"event\":\"LeBron scores 35 in blowout win. Playoff dominance on full display.\",\"category\":\"game\"},\"5-21\":{\"year\":2015,\"event\":\"LeBron leads Cavs past Hawks. Finals bound.\",\"category\":\"milestone\"},\"5-22\":{\"year\":2018,\"event\":\"LeBron drops 42 in Game 4 vs Celtics. Unstoppable.\",\"category\":\"game\"},\"5-23\":{\"year\":2016,\"event\":\"LeBron clinches Eastern Conference Finals. Back to the Finals.\",\"category\":\"milestone\"},\"5-24\":{\"year\":2021,\"event\":\"LeBron posts birthday selfie. Still looking 25.\",\"category\":\"funny\"},\"5-25\":{\"year\":2018,\"event\":\"LeBron drops 46-11-9 to force Game 7 vs Celtics. All-time performance.\",\"category\":\"game\"},\"5-26\":{\"year\":2020,\"event\":\"LeBron does IG Live with fans. Wholesome King.\",\"category\":\"funny\"},\"5-27\":{\"year\":2016,\"event\":\"LeBron prepares for Finals vs Warriors. History awaits.\",\"category\":\"moment\"},\"5-28\":{\"year\":2015,\"event\":\"LeBron drops 37 in Game 5 of ECF. Conference finals MVP.\",\"category\":\"game\"},\"5-29\":{\"year\":2017,\"event\":\"LeBron goes 12-0 in Eastern Conference playoffs. Perfect.\",\"category\":\"milestone\"},\"5-30\":{\"year\":2019,\"event\":\"LeBron posts vacation content. King is chilling.\",\"category\":\"funny\"},\"5-31\":{\"year\":2007,\"event\":\"LeBron scores the Cavs' final 25 points vs Pistons. 48 Special.\",\"category\":\"game\"},\"6-1\":{\"year\":2018,\"event\":\"June begins. LeBron drops 51 in Finals Game 1. JR Smith ruins it.\",\"category\":\"game\"},\"6-2\":{\"year\":2017,\"event\":\"LeBron drops 29-11-14 in Finals Game 1. Not enough vs Warriors.\",\"category\":\"game\"},\"6-3\":{\"year\":2016,\"event\":\"LeBron scores 23 in Finals Game 1. Series is just starting.\",\"category\":\"game\"},\"6-4\":{\"year\":2015,\"event\":\"LeBron drops 44 in Finals Game 1. Kyrie and Love out. Solo mission.\",\"category\":\"game\"},\"6-5\":{\"year\":2014,\"event\":\"LeBron notches Finals triple-double. Heat legend.\",\"category\":\"game\"},\"6-6\":{\"year\":2020,\"event\":\"LeBron announces return to basketball. Bubble time.\",\"category\":\"moment\"},\"6-7\":{\"year\":2016,\"event\":\"LeBron drops 41 in Finals Game 3. Cavs first Finals win vs Warriors.\",\"category\":\"game\"},\"6-8\":{\"year\":2018,\"event\":\"LeBron's 51-point Finals game goes down as all-time. JR still confused.\",\"category\":\"game\"},\"6-9\":{\"year\":2012,\"event\":\"LeBron drops 45 in Game 6 vs Celtics. Best playoff game ever.\",\"category\":\"game\"},\"6-10\":{\"year\":2017,\"event\":\"LeBron averages triple-double through 4 Finals games. GOAT mode.\",\"category\":\"milestone\"},\"6-11\":{\"year\":2015,\"event\":\"LeBron drops 39-16-11 in Finals Game 4. Ridiculous statline.\",\"category\":\"game\"},\"6-12\":{\"year\":2013,\"event\":\"LeBron wins second championship. Back-to-back titles.\",\"category\":\"milestone\"},\"6-13\":{\"year\":2016,\"event\":\"LeBron scores 41 in Finals Game 5. Down 3-1, refuses to quit.\",\"category\":\"game\"},\"6-14\":{\"year\":2014,\"event\":\"LeBron's Heat lose Finals. He'll be back.\",\"category\":\"moment\"},\"6-15\":{\"year\":2020,\"event\":\"LeBron posts workout video. Bubble prep is serious.\",\"category\":\"funny\"},\"6-16\":{\"year\":2012,\"event\":\"LeBron wins first championship. Monkey off his back.\",\"category\":\"milestone\"},\"6-17\":{\"year\":2016,\"event\":\"LeBron drops 41 in Finals Game 6. Forces Game 7.\",\"category\":\"game\"},\"6-18\":{\"year\":2019,\"event\":\"LeBron watches NBA Finals from home. Strangest timeline.\",\"category\":\"funny\"},\"6-19\":{\"year\":2016,\"event\":\"LeBron wins championship for Cleveland. The Block. The GOAT moment.\",\"category\":\"milestone\"},\"6-20\":{\"year\":2013,\"event\":\"LeBron wins Finals MVP. Back-to-back MVPs.\",\"category\":\"milestone\"},\"6-21\":{\"year\":2012,\"event\":\"LeBron named Finals MVP. First of four.\",\"category\":\"milestone\"},\"6-22\":{\"year\":2016,\"event\":\"Cleveland celebrates championship parade. LeBron cries with the city.\",\"category\":\"moment\"},\"6-23\":{\"year\":2020,\"event\":\"LeBron arrives at the bubble. Mission: Ring #4.\",\"category\":\"moment\"},\"6-24\":{\"year\":2021,\"event\":\"LeBron honors Kobe on Mamba Day. Forever 24.\",\"category\":\"moment\"},\"6-25\":{\"year\":2018,\"event\":\"LeBron contemplates free agency. League on notice.\",\"category\":\"moment\"},\"6-26\":{\"year\":2014,\"event\":\"LeBron opts out of Heat contract. Decision 2.0 coming.\",\"category\":\"moment\"},\"6-27\":{\"year\":2019,\"event\":\"LeBron posts summer workout content. Year 17 prep begins.\",\"category\":\"funny\"},\"6-28\":{\"year\":2015,\"event\":\"LeBron becomes free agent. Cavs fans hold their breath.\",\"category\":\"moment\"},\"6-29\":{\"year\":2020,\"event\":\"LeBron scrimmages in the bubble. Looking unstoppable.\",\"category\":\"funny\"},\"6-30\":{\"year\":2016,\"event\":\"LeBron re-signs with Cavs. Run it back.\",\"category\":\"moment\"},\"7-1\":{\"year\":2018,\"event\":\"LeBron signs with the Lakers. The King goes to Hollywood.\",\"category\":\"milestone\"},\"7-2\":{\"year\":2022,\"event\":\"LeBron posts July 4th weekend content. Patriotic King.\",\"category\":\"funny\"},\"7-3\":{\"year\":2020,\"event\":\"LeBron dominates bubble scrimmages. Championship mode loading.\",\"category\":\"funny\"},\"7-4\":{\"year\":2016,\"event\":\"July 4th. LeBron celebrates with championship ring. America's King.\",\"category\":\"funny\"},\"7-5\":{\"year\":2019,\"event\":\"LeBron posts family vacation photos. Dad mode activated.\",\"category\":\"funny\"},\"7-6\":{\"year\":2021,\"event\":\"LeBron switches to #6. New chapter begins.\",\"category\":\"moment\"},\"7-7\":{\"year\":2022,\"event\":\"Lucky 7s. LeBron posts cryptic tweet. NBA Twitter erupts.\",\"category\":\"funny\"},\"7-8\":{\"year\":2010,\"event\":\"The Decision. 'I'm taking my talents to South Beach.' History made.\",\"category\":\"milestone\"},\"7-9\":{\"year\":2020,\"event\":\"LeBron dominates bubble restart. 30+ points like clockwork.\",\"category\":\"game\"},\"7-10\":{\"year\":2016,\"event\":\"LeBron celebrates Cleveland championship with parade speech.\",\"category\":\"moment\"},\"7-11\":{\"year\":2014,\"event\":\"LeBron announces return to Cleveland. 'I'm coming home.'\",\"category\":\"milestone\"},\"7-12\":{\"year\":2019,\"event\":\"LeBron posts workout video. Never stops grinding.\",\"category\":\"funny\"},\"7-13\":{\"year\":2021,\"event\":\"LeBron announces Space Jam 2 premiere. Hollywood Bron.\",\"category\":\"moment\"},\"7-14\":{\"year\":2020,\"event\":\"Bastille Day. LeBron storms the bubble with 35 points.\",\"category\":\"game\"},\"7-15\":{\"year\":2018,\"event\":\"LeBron officially joins Lakers. Purple and Gold era begins.\",\"category\":\"milestone\"},\"7-16\":{\"year\":2022,\"event\":\"LeBron posts Bronny workout video. Father-son goals.\",\"category\":\"funny\"},\"7-17\":{\"year\":2019,\"event\":\"LeBron trains in Miami. Keeping the heat alive.\",\"category\":\"funny\"},\"7-18\":{\"year\":2020,\"event\":\"LeBron drops 30 in bubble game. Age is just a number.\",\"category\":\"game\"},\"7-19\":{\"year\":2021,\"event\":\"LeBron attends ESPY Awards. King of the red carpet.\",\"category\":\"funny\"},\"7-20\":{\"year\":2016,\"event\":\"LeBron meets President Obama with championship trophy.\",\"category\":\"moment\"},\"7-21\":{\"year\":2022,\"event\":\"LeBron posts vacation photos from Italy. La Dolce Vita.\",\"category\":\"funny\"},\"7-22\":{\"year\":2020,\"event\":\"LeBron leads Lakers to bubble win streak. Unstoppable.\",\"category\":\"game\"},\"7-23\":{\"year\":2018,\"event\":\"LeBron rocks #23 at Lakers intro. The King has arrived.\",\"category\":\"moment\"},\"7-24\":{\"year\":2021,\"event\":\"LeBron wears Mamba jersey in honor of Kobe. 8/24 forever.\",\"category\":\"moment\"},\"7-25\":{\"year\":2019,\"event\":\"LeBron posts wine and music. Summer vibes only.\",\"category\":\"funny\"},\"7-26\":{\"year\":2020,\"event\":\"LeBron notches 35-10-8 in bubble. Championship form.\",\"category\":\"game\"},\"7-27\":{\"year\":2022,\"event\":\"LeBron announces new business partnership. Mogul moves.\",\"category\":\"moment\"},\"7-28\":{\"year\":2021,\"event\":\"LeBron posts Team USA content. Olympic legend.\",\"category\":\"funny\"},\"7-29\":{\"year\":2020,\"event\":\"LeBron clinches #1 seed in bubble. Playoff mode activated.\",\"category\":\"milestone\"},\"7-30\":{\"year\":2018,\"event\":\"LeBron opens I Promise School in Akron. Changing lives.\",\"category\":\"milestone\"},\"7-31\":{\"year\":2019,\"event\":\"LeBron closes July with family content. Dad of the year.\",\"category\":\"funny\"},\"8-1\":{\"year\":2020,\"event\":\"August begins. LeBron enters bubble playoffs. Mission: Ring.\",\"category\":\"moment\"},\"8-2\":{\"year\":2021,\"event\":\"LeBron celebrates Team USA basketball. Olympic gold vibes.\",\"category\":\"funny\"},\"8-3\":{\"year\":2016,\"event\":\"LeBron leads Team USA at Rio Olympics. Gold medal incoming.\",\"category\":\"milestone\"},\"8-4\":{\"year\":2012,\"event\":\"LeBron dominates Olympics. Gold medal secured.\",\"category\":\"milestone\"},\"8-5\":{\"year\":2020,\"event\":\"LeBron drops 35 in bubble playoffs. Activated.\",\"category\":\"game\"},\"8-6\":{\"year\":2019,\"event\":\"LeBron posts pre-season workout. Year 17 loading.\",\"category\":\"funny\"},\"8-7\":{\"year\":2022,\"event\":\"LeBron announces return to #23. The King's number.\",\"category\":\"moment\"},\"8-8\":{\"year\":2008,\"event\":\"Beijing Olympics opening ceremony. LeBron represents USA.\",\"category\":\"milestone\"},\"8-9\":{\"year\":2020,\"event\":\"LeBron notches playoff triple-double. Bubble dominance.\",\"category\":\"game\"},\"8-10\":{\"year\":2021,\"event\":\"LeBron posts 'Motivated' caption. League shaking.\",\"category\":\"funny\"},\"8-11\":{\"year\":2016,\"event\":\"LeBron wins Olympic gold. Third gold medal.\",\"category\":\"milestone\"},\"8-12\":{\"year\":2020,\"event\":\"LeBron drops 30+ in bubble. Routine excellence.\",\"category\":\"game\"},\"8-13\":{\"year\":2019,\"event\":\"LeBron attends Bronny's AAU game. Proud dad.\",\"category\":\"funny\"},\"8-14\":{\"year\":2022,\"event\":\"LeBron posts workout content. Never stops grinding.\",\"category\":\"funny\"},\"8-15\":{\"year\":2020,\"event\":\"LeBron leads Lakers past first round. Bubble success.\",\"category\":\"milestone\"},\"8-16\":{\"year\":2021,\"event\":\"LeBron announces new Nike deal. Billion-dollar athlete.\",\"category\":\"moment\"},\"8-17\":{\"year\":2018,\"event\":\"LeBron celebrates I Promise School one-year anniversary.\",\"category\":\"moment\"},\"8-18\":{\"year\":2020,\"event\":\"LeBron drops 38 in bubble playoffs. On a mission.\",\"category\":\"game\"},\"8-19\":{\"year\":2019,\"event\":\"LeBron posts family vacation throwback. Memories.\",\"category\":\"funny\"},\"8-20\":{\"year\":2022,\"event\":\"LeBron trains with Bronny. Next generation incoming.\",\"category\":\"funny\"},\"8-21\":{\"year\":2020,\"event\":\"LeBron notches 30-10-8 in bubble. Championship form.\",\"category\":\"game\"},\"8-22\":{\"year\":2021,\"event\":\"LeBron posts cryptic tweet. NBA detectives activate.\",\"category\":\"funny\"},\"8-23\":{\"year\":2016,\"event\":\"LeBron wears #23 with pride. The King's number.\",\"category\":\"funny\"},\"8-24\":{\"year\":2020,\"event\":\"Kobe Day. LeBron honors Mamba with dominant performance.\",\"category\":\"moment\"},\"8-25\":{\"year\":2019,\"event\":\"LeBron announces Lakers jersey reveal. Purple and Gold hype.\",\"category\":\"moment\"},\"8-26\":{\"year\":2020,\"event\":\"LeBron wears Kobe tribute shoes in bubble. Forever Mamba.\",\"category\":\"moment\"},\"8-27\":{\"year\":2022,\"event\":\"LeBron posts pre-season workout. Age 37 looking like 27.\",\"category\":\"funny\"},\"8-28\":{\"year\":2020,\"event\":\"LeBron and Lakers boycott game after Jacob Blake shooting. More than an athlete.\",\"category\":\"moment\"},\"8-29\":{\"year\":2021,\"event\":\"LeBron posts summer recap. Another legendary offseason.\",\"category\":\"funny\"},\"8-30\":{\"year\":2020,\"event\":\"LeBron drops 36 in bubble playoffs. Unstoppable force.\",\"category\":\"game\"},\"8-31\":{\"year\":2019,\"event\":\"LeBron ends summer with family time. Recharging for greatness.\",\"category\":\"funny\"},\"9-1\":{\"year\":2020,\"event\":\"September playoffs. LeBron drops 35 to open the month.\",\"category\":\"game\"},\"9-2\":{\"year\":2021,\"event\":\"LeBron announces Space Jam 2 streaming success. Hollywood wins.\",\"category\":\"moment\"},\"9-3\":{\"year\":2019,\"event\":\"LeBron begins training camp prep. Season incoming.\",\"category\":\"funny\"},\"9-4\":{\"year\":2020,\"event\":\"LeBron notches triple-double in bubble. Playoff excellence.\",\"category\":\"game\"},\"9-5\":{\"year\":2022,\"event\":\"LeBron posts 'Almost that time' on social media. Season hype.\",\"category\":\"funny\"},\"9-6\":{\"year\":2020,\"event\":\"LeBron leads Lakers to conference finals. Two wins away from Finals.\",\"category\":\"milestone\"},\"9-7\":{\"year\":2021,\"event\":\"LeBron attends Bronny's high school game. Proud papa.\",\"category\":\"funny\"},\"9-8\":{\"year\":2019,\"event\":\"LeBron announces training camp schedule. Let's get it.\",\"category\":\"moment\"},\"9-9\":{\"year\":2020,\"event\":\"LeBron drops 38-12-8 in WCF. Dominant performance.\",\"category\":\"game\"},\"9-10\":{\"year\":2022,\"event\":\"LeBron posts wine collection update. Sommelier Bron.\",\"category\":\"funny\"},\"9-11\":{\"year\":2020,\"event\":\"LeBron honors 9/11 victims before bubble game. Never forget.\",\"category\":\"moment\"},\"9-12\":{\"year\":2021,\"event\":\"LeBron announces charity event. Giving back always.\",\"category\":\"moment\"},\"9-13\":{\"year\":2020,\"event\":\"LeBron notches 30-10-11 in conference finals. Finals bound.\",\"category\":\"game\"},\"9-14\":{\"year\":2019,\"event\":\"LeBron posts 'Ready for the season' workout video. Let's go.\",\"category\":\"funny\"},\"9-15\":{\"year\":2020,\"event\":\"LeBron leads Lakers past Nuggets. NBA Finals here we come.\",\"category\":\"milestone\"},\"9-16\":{\"year\":2022,\"event\":\"LeBron announces media day. New season vibes.\",\"category\":\"moment\"},\"9-17\":{\"year\":2020,\"event\":\"LeBron prepares for bubble Finals. Ring #4 mission.\",\"category\":\"moment\"},\"9-18\":{\"year\":2021,\"event\":\"LeBron posts pre-season content. Year 19 incoming.\",\"category\":\"funny\"},\"9-19\":{\"year\":2020,\"event\":\"LeBron practices for Finals. Locked in like never before.\",\"category\":\"funny\"},\"9-20\":{\"year\":2019,\"event\":\"LeBron attends Lakers media day. Purple and Gold ready.\",\"category\":\"moment\"},\"9-21\":{\"year\":2020,\"event\":\"LeBron rests before Finals. Mental and physical prep.\",\"category\":\"funny\"},\"9-22\":{\"year\":2022,\"event\":\"LeBron posts 'It's that time' on Twitter. Season hype real.\",\"category\":\"funny\"},\"9-23\":{\"year\":2020,\"event\":\"LeBron suits up for NBA Finals. Business time.\",\"category\":\"moment\"},\"9-24\":{\"year\":2021,\"event\":\"LeBron honors Kobe on 9/24. Forever Mamba.\",\"category\":\"moment\"},\"9-25\":{\"year\":2020,\"event\":\"LeBron drops 25-13-9 in Finals opener. Statement made.\",\"category\":\"game\"},\"9-26\":{\"year\":2019,\"event\":\"LeBron begins pre-season games. Season is here.\",\"category\":\"moment\"},\"9-27\":{\"year\":2020,\"event\":\"LeBron leads Lakers to 2-0 Finals lead. Dominant.\",\"category\":\"game\"},\"9-28\":{\"year\":2022,\"event\":\"LeBron announces new SpringHill project. Media mogul.\",\"category\":\"moment\"},\"9-29\":{\"year\":2020,\"event\":\"LeBron drops 25 points in Finals Game 3. Up 2-1.\",\"category\":\"game\"},\"9-30\":{\"year\":2021,\"event\":\"LeBron closes September with pre-season action. Ready to dominate.\",\"category\":\"moment\"},\"10-1\":{\"year\":2020,\"event\":\"October Finals. LeBron drops 28-12-8 to take 3-1 lead.\",\"category\":\"game\"},\"10-2\":{\"year\":2019,\"event\":\"LeBron plays first pre-season game as a Laker. Purple and Gold debut.\",\"category\":\"moment\"},\"10-3\":{\"year\":2022,\"event\":\"LeBron begins pre-season. Another year of greatness ahead.\",\"category\":\"moment\"},\"10-4\":{\"year\":2020,\"event\":\"LeBron drops 28-14-10 to close out Finals. Ring #4 secured.\",\"category\":\"milestone\"},\"10-5\":{\"year\":2021,\"event\":\"LeBron posts championship throwback. Year ago today vibes.\",\"category\":\"funny\"},\"10-6\":{\"year\":2020,\"event\":\"LeBron celebrates bubble championship. Mickey Mouse ring haters in shambles.\",\"category\":\"moment\"},\"10-7\":{\"year\":2019,\"event\":\"LeBron dominates pre-season game. Ready for the season.\",\"category\":\"game\"},\"10-8\":{\"year\":2022,\"event\":\"LeBron posts pre-season workout. Year 20 different.\",\"category\":\"funny\"},\"10-9\":{\"year\":2020,\"event\":\"LeBron celebrates Lakers championship parade. Well, virtual parade.\",\"category\":\"moment\"},\"10-10\":{\"year\":2021,\"event\":\"LeBron drops 30+ in pre-season. Still got it.\",\"category\":\"game\"},\"10-11\":{\"year\":2020,\"event\":\"LeBron wins Finals MVP. Fourth time's a charm.\",\"category\":\"milestone\"},\"10-12\":{\"year\":2019,\"event\":\"LeBron speaks on China-NBA controversy. More than an athlete.\",\"category\":\"moment\"},\"10-13\":{\"year\":2022,\"event\":\"LeBron announces final pre-season game. Season incoming.\",\"category\":\"moment\"},\"10-14\":{\"year\":2021,\"event\":\"LeBron posts 'It's time' on social media. Season ready.\",\"category\":\"funny\"},\"10-15\":{\"year\":2020,\"event\":\"LeBron celebrates championship at home. Well-deserved rest.\",\"category\":\"funny\"},\"10-16\":{\"year\":2019,\"event\":\"LeBron drops 32 in final pre-season game. Ready to roll.\",\"category\":\"game\"},\"10-17\":{\"year\":2022,\"event\":\"LeBron prepares for season opener. Let's get it.\",\"category\":\"moment\"},\"10-18\":{\"year\":2021,\"event\":\"LeBron opens season with 30+ points. Year 19 starts strong.\",\"category\":\"game\"},\"10-19\":{\"year\":2018,\"event\":\"LeBron makes Lakers debut. Purple and Gold era begins.\",\"category\":\"milestone\"},\"10-20\":{\"year\":2022,\"event\":\"LeBron opens Year 20 with 30 points. Ageless wonder.\",\"category\":\"game\"},\"10-21\":{\"year\":2020,\"event\":\"LeBron posts championship celebration content. Enjoying the moment.\",\"category\":\"funny\"},\"10-22\":{\"year\":2019,\"event\":\"LeBron drops 25-11-10 in Lakers season opener. Triple-double machine.\",\"category\":\"game\"},\"10-23\":{\"year\":2021,\"event\":\"LeBron notches 30-8-5 in early season game. Still the King.\",\"category\":\"game\"},\"10-24\":{\"year\":2022,\"event\":\"LeBron honors Kobe on 10/24. Mamba Day forever.\",\"category\":\"moment\"},\"10-25\":{\"year\":2018,\"event\":\"LeBron drops 28-8-11 in Lakers win. Hollywood adjusting nicely.\",\"category\":\"game\"},\"10-26\":{\"year\":2020,\"event\":\"LeBron posts 'Back to work' on social media. New season prep.\",\"category\":\"funny\"},\"10-27\":{\"year\":2021,\"event\":\"LeBron scores 30+ in Lakers win. Routine excellence.\",\"category\":\"game\"},\"10-28\":{\"year\":2019,\"event\":\"LeBron notches triple-double early in season. Here we go again.\",\"category\":\"game\"},\"10-29\":{\"year\":2003,\"event\":\"LeBron plays his first NBA game. A legend is born.\",\"category\":\"milestone\"},\"10-30\":{\"year\":2022,\"event\":\"Halloween. LeBron scares the league with 35 points.\",\"category\":\"game\"},\"10-31\":{\"year\":2020,\"event\":\"Halloween. LeBron posts costume content with family. Dad vibes.\",\"category\":\"funny\"},\"11-1\":{\"year\":2021,\"event\":\"November begins. LeBron drops 30+ to open the month.\",\"category\":\"game\"},\"11-2\":{\"year\":2019,\"event\":\"LeBron notches 30-10-6 in Lakers win. Peak performance.\",\"category\":\"game\"},\"11-3\":{\"year\":2022,\"event\":\"LeBron posts motivational quote. Inspiring millions.\",\"category\":\"funny\"},\"11-4\":{\"year\":2020,\"event\":\"Election Day. LeBron posts 'Vote' content. More than an athlete.\",\"category\":\"moment\"},\"11-5\":{\"year\":2018,\"event\":\"LeBron drops 44-5-3 against Portland. Lakers domination.\",\"category\":\"game\"},\"11-6\":{\"year\":2021,\"event\":\"LeBron records triple-double. Another day at the office.\",\"category\":\"game\"},\"11-7\":{\"year\":2019,\"event\":\"LeBron scores 25+ for the 1000th time. Historic milestone.\",\"category\":\"milestone\"},\"11-8\":{\"year\":2022,\"event\":\"LeBron drops 35-8-7 in Lakers win. Still elite.\",\"category\":\"game\"},\"11-9\":{\"year\":2020,\"event\":\"LeBron celebrates Lakers ring ceremony. Banner night.\",\"category\":\"moment\"},\"11-10\":{\"year\":2021,\"event\":\"LeBron notches 30 points in Lakers win. Consistent greatness.\",\"category\":\"game\"},\"11-11\":{\"year\":2018,\"event\":\"Veterans Day. LeBron honors military with tribute post.\",\"category\":\"moment\"},\"11-12\":{\"year\":2019,\"event\":\"LeBron drops 25-7-13 in Lakers win. Court general.\",\"category\":\"game\"},\"11-13\":{\"year\":2022,\"event\":\"LeBron posts throwback content. Nostalgia hits different.\",\"category\":\"funny\"},\"11-14\":{\"year\":2020,\"event\":\"LeBron scores 35 in season opener. Championship defense begins.\",\"category\":\"game\"},\"11-15\":{\"year\":2021,\"event\":\"LeBron drops 39 points in Lakers win. Still got it at 36.\",\"category\":\"game\"},\"11-16\":{\"year\":2018,\"event\":\"LeBron notches triple-double in Lakers win. Magic Johnson smiling.\",\"category\":\"game\"},\"11-17\":{\"year\":2019,\"event\":\"LeBron scores 30+ in Lakers road win. Dominance continues.\",\"category\":\"game\"},\"11-18\":{\"year\":2022,\"event\":\"LeBron posts workout video. Never stops grinding.\",\"category\":\"funny\"},\"11-19\":{\"year\":2020,\"event\":\"LeBron drops 30-8-12 in Lakers win. Triple-double threat always.\",\"category\":\"game\"},\"11-20\":{\"year\":2021,\"event\":\"LeBron scores 25+ in Lakers win. Consistent excellence.\",\"category\":\"game\"},\"11-21\":{\"year\":2018,\"event\":\"LeBron posts family Thanksgiving prep content. Grateful King.\",\"category\":\"funny\"},\"11-22\":{\"year\":2019,\"event\":\"LeBron drops 25-11-10 on Thanksgiving week. Triple-double feast.\",\"category\":\"game\"},\"11-23\":{\"year\":2022,\"event\":\"LeBron posts Thanksgiving family content. Blessed and grateful.\",\"category\":\"funny\"},\"11-24\":{\"year\":2020,\"event\":\"Thanksgiving. LeBron thankful for ring #4.\",\"category\":\"funny\"},\"11-25\":{\"year\":2021,\"event\":\"LeBron scores 30+ on Black Friday. Shopping for buckets.\",\"category\":\"game\"},\"11-26\":{\"year\":2018,\"event\":\"LeBron posts family time content. Thanksgiving vibes.\",\"category\":\"funny\"},\"11-27\":{\"year\":2019,\"event\":\"LeBron notches 30-7-13 in Lakers win. Court vision elite.\",\"category\":\"game\"},\"11-28\":{\"year\":2022,\"event\":\"LeBron drops 35 points. Thanksgiving weekend dominance.\",\"category\":\"game\"},\"11-29\":{\"year\":2020,\"event\":\"LeBron scores 30+ to close out November. Hot streak.\",\"category\":\"game\"},\"11-30\":{\"year\":2021,\"event\":\"LeBron ends November with triple-double. Monthly excellence.\",\"category\":\"game\"},\"12-1\":{\"year\":2020,\"event\":\"December starts. LeBron drops 30+ to open the month.\",\"category\":\"game\"},\"12-2\":{\"year\":2018,\"event\":\"LeBron notches 42-5-6 in Lakers win. Peak performance.\",\"category\":\"game\"},\"12-3\":{\"year\":2021,\"event\":\"LeBron scores 30+ in Lakers win. Still elite at 36.\",\"category\":\"game\"},\"12-4\":{\"year\":2019,\"event\":\"LeBron drops 25-7-11 in Lakers win. Playmaker supreme.\",\"category\":\"game\"},\"12-5\":{\"year\":2022,\"event\":\"LeBron posts 'December excellence' on social. Motivated.\",\"category\":\"funny\"},\"12-6\":{\"year\":2020,\"event\":\"LeBron notches triple-double. Another one.\",\"category\":\"game\"},\"12-7\":{\"year\":2021,\"event\":\"LeBron scores 35 in Lakers win. December dominance.\",\"category\":\"game\"},\"12-8\":{\"year\":2018,\"event\":\"LeBron drops 30-10-6 in Lakers win. Video game stats.\",\"category\":\"game\"},\"12-9\":{\"year\":2019,\"event\":\"LeBron passes 33,000 career points. Climbing the ladder.\",\"category\":\"milestone\"},\"12-10\":{\"year\":2022,\"event\":\"LeBron notches 30 points. Routine excellence.\",\"category\":\"game\"},\"12-11\":{\"year\":2020,\"event\":\"LeBron drops 28-8-12 in Lakers win. All-around brilliance.\",\"category\":\"game\"},\"12-12\":{\"year\":2021,\"event\":\"LeBron scores 30+ in Lakers win. December heat.\",\"category\":\"game\"},\"12-13\":{\"year\":2018,\"event\":\"LeBron passes 32,000 career points. Unstoppable.\",\"category\":\"milestone\"},\"12-14\":{\"year\":2019,\"event\":\"LeBron notches triple-double. Classic LeBron.\",\"category\":\"game\"},\"12-15\":{\"year\":2022,\"event\":\"LeBron drops 35-8-7 in Lakers win. Peak form.\",\"category\":\"game\"},\"12-16\":{\"year\":2020,\"event\":\"LeBron scores 30 in Lakers win. Consistent greatness.\",\"category\":\"game\"},\"12-17\":{\"year\":2021,\"event\":\"LeBron notches 30-10-6. Video game numbers.\",\"category\":\"game\"},\"12-18\":{\"year\":2018,\"event\":\"LeBron drops 28-7-12 in Lakers win. Court general.\",\"category\":\"game\"},\"12-19\":{\"year\":2019,\"event\":\"LeBron scores 35+ in Lakers win. Holiday dominance.\",\"category\":\"game\"},\"12-20\":{\"year\":2022,\"event\":\"LeBron posts holiday content with family. Merry Christmas prep.\",\"category\":\"funny\"},\"12-21\":{\"year\":2020,\"event\":\"LeBron drops 30-8-10 in Lakers win. Triple-double threat.\",\"category\":\"game\"},\"12-22\":{\"year\":2021,\"event\":\"LeBron scores 30+ in Lakers win. Holiday excellence.\",\"category\":\"game\"},\"12-23\":{\"year\":2018,\"event\":\"LeBron notches 35-5-5 before Christmas. Delivering gifts early.\",\"category\":\"game\"},\"12-24\":{\"year\":2019,\"event\":\"Christmas Eve. LeBron posts family content. Blessed and grateful.\",\"category\":\"funny\"},\"12-25\":{\"year\":2020,\"event\":\"Christmas Day. LeBron drops 30+ in nationally televised game.\",\"category\":\"game\"},\"12-26\":{\"year\":2021,\"event\":\"LeBron posts Christmas family photos. Holiday King.\",\"category\":\"funny\"},\"12-27\":{\"year\":2018,\"event\":\"LeBron scores 30 in Lakers win. Post-Christmas excellence.\",\"category\":\"game\"},\"12-28\":{\"year\":2019,\"event\":\"LeBron notches triple-double to close out year. Perfect ending.\",\"category\":\"game\"},\"12-29\":{\"year\":2022,\"event\":\"LeBron drops 35 points. Year-end dominance.\",\"category\":\"game\"},\"12-30\":{\"year\":1984,\"event\":\"LeBron Raymone James is born in Akron, Ohio. A legend begins.\",\"category\":\"milestone\"},\"12-31\":{\"year\":2020,\"event\":\"New Year's Eve. LeBron posts 'Bring on 2021' content. Ready for more.\",\"category\":\"funny\"}}"));}),
"[project]/sassy-mate/components/today-in-bron-history.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TodayInBronHistory",
    ()=>TodayInBronHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$bron$2d$history$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/sassy-mate/lib/bron-history.json (json)");
"use client";
;
;
;
;
const getCategoryColor = (category)=>{
    switch(category){
        case "game":
            return "bg-cavs-wine text-white";
        case "milestone":
            return "bg-cavs-gold text-cavs-navy";
        case "moment":
            return "bg-cavs-navy text-white";
        case "funny":
            return "bg-slate-100 text-slate-700";
        default:
            return "bg-slate-200 text-slate-700";
    }
};
const getCategoryLabel = (category)=>{
    switch(category){
        case "game":
            return "Game Performance";
        case "milestone":
            return "Milestone";
        case "moment":
            return "Special Moment";
        case "funny":
            return "Off Court";
        default:
            return "Event";
    }
};
function TodayInBronHistory() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const dateKey = `${month}-${day}`;
    const todayEvent = __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$bron$2d$history$2e$json__$28$json$29$__["default"][dateKey];
    if (!todayEvent) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-4xl md:text-5xl text-cavs-wine mb-2",
                            children: "TODAY IN BRON HISTORY"
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600 text-lg",
                            children: today.toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric"
                            })
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "border-2 border-cavs-wine/20 shadow-xl hover:shadow-2xl transition-shadow duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            className: "pb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    className: getCategoryColor(todayEvent.category),
                                                    children: getCategoryLabel(todayEvent.category)
                                                }, void 0, false, {
                                                    fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: "font-bold",
                                                    children: todayEvent.year
                                                }, void 0, false, {
                                                    fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-2xl md:text-3xl text-cavs-navy leading-tight",
                                            children: todayEvent.event
                                        }, void 0, false, {
                                            fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm text-slate-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "On this day in"
                                    }, void 0, false, {
                                        fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-cavs-wine",
                                        children: todayEvent.year
                                    }, void 0, false, {
                                        fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "LeBron made history"
                                    }, void 0, false, {
                                        fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-sm text-slate-500 mt-6",
                    children: "365 days of greatness. Check back tomorrow for another legendary moment."
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/today-in-bron-history.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = TodayInBronHistory;
var _c;
__turbopack_context__.k.register(_c, "TodayInBronHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/lakers-schedule.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LakersSchedule",
    ()=>LakersSchedule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LakersSchedule() {
    _s();
    const [scheduleData, setScheduleData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LakersSchedule.useEffect": ()=>{
            async function fetchSchedule() {
                try {
                    const res = await fetch("/api/teams/lakers/upcoming");
                    const data = await res.json();
                    if (data.success) {
                        setScheduleData(data.data);
                    }
                } catch (error) {
                    console.error("Failed to fetch Lakers schedule:", error);
                } finally{
                    setLoading(false);
                }
            }
            fetchSchedule();
        }
    }["LakersSchedule.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "bg-gradient-to-br from-purple-600 via-purple-700 to-yellow-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "py-12 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                    className: "w-8 h-8 text-white animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    const game = scheduleData?.nextGame;
    const lebronStatus = scheduleData?.lebronStatus || "Status Unknown";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-gradient-to-br from-purple-600 via-purple-700 to-yellow-500 text-white border-0 overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10 grain"
            }, void 0, false, {
                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "font-display text-3xl text-white",
                                    children: "NEXT LEBRON GAME"
                                }, void 0, false, {
                                    fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    className: "text-purple-100 mt-1",
                                    children: "Lakers Schedule"
                                }, void 0, false, {
                                    fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                className: "w-4 h-4 text-yellow-300"
                            }, void 0, false, {
                                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "LeBron Status:"
                            }, void 0, false, {
                                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-yellow-300",
                                children: lebronStatus
                            }, void 0, false, {
                                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "relative z-10",
                children: !game ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12 text-purple-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            className: "w-16 h-16 mx-auto mb-4 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg",
                            children: "No upcoming games scheduled"
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 sm:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center bg-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[70px] sm:min-w-[80px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl sm:text-4xl font-display text-yellow-300",
                                        children: new Date(game.datetime).toLocaleDateString('en-US', {
                                            day: 'numeric'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs sm:text-sm text-purple-200 uppercase font-semibold mt-1",
                                        children: new Date(game.datetime).toLocaleDateString('en-US', {
                                            month: 'short'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-purple-300 mt-0.5",
                                        children: new Date(game.datetime).toLocaleDateString('en-US', {
                                            year: 'numeric'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 sm:gap-3 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-2xl sm:text-3xl text-white",
                                                children: game.is_home ? "vs" : "@"
                                            }, void 0, false, {
                                                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-2xl sm:text-3xl text-white",
                                                children: game.opponent_abbr
                                            }, void 0, false, {
                                                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs sm:text-sm text-purple-200 ml-6 sm:ml-8 mb-2",
                                        children: game.opponent
                                    }, void 0, false, {
                                        fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 ml-6 sm:ml-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs sm:text-sm text-purple-200 font-medium",
                                                children: new Date(game.datetime).toLocaleString('en-US', {
                                                    hour: 'numeric',
                                                    minute: '2-digit',
                                                    timeZoneName: 'short'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sassy-mate/components/lakers-schedule.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(LakersSchedule, "4AfRzSAlu2jbApS9nYbg/YptjPo=");
_c = LakersSchedule;
var _c;
__turbopack_context__.k.register(_c, "LakersSchedule");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/glazer-leaderboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlazerLeaderboard",
    ()=>GlazerLeaderboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GlazerLeaderboard() {
    _s();
    const [leaders, setLeaders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlazerLeaderboard.useEffect": ()=>{
            async function fetchLeaders() {
                try {
                    // Try to fetch from API first (production with Redis)
                    const res = await fetch("/api/witnesses/leaderboard");
                    const data = await res.json();
                    if (data.success && data.data.length > 0) {
                        setLeaders(data.data.slice(0, 10));
                    } else {
                        // Fallback to localStorage for local development
                        const stored = localStorage.getItem("leaders");
                        if (stored) {
                            const parsed = JSON.parse(stored);
                            const sorted = parsed.sort({
                                "GlazerLeaderboard.useEffect.fetchLeaders.sorted": (a, b)=>b.points - a.points
                            }["GlazerLeaderboard.useEffect.fetchLeaders.sorted"]);
                            setLeaders(sorted.slice(0, 10));
                        }
                    }
                } catch (error) {
                    console.error("Failed to fetch leaderboard:", error);
                    // Fallback to localStorage
                    const stored = localStorage.getItem("leaders");
                    if (stored) {
                        const parsed = JSON.parse(stored);
                        const sorted = parsed.sort({
                            "GlazerLeaderboard.useEffect.fetchLeaders.sorted": (a, b)=>b.points - a.points
                        }["GlazerLeaderboard.useEffect.fetchLeaders.sorted"]);
                        setLeaders(sorted.slice(0, 10));
                    }
                }
            }
            fetchLeaders();
        }
    }["GlazerLeaderboard.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-5xl text-center mb-4 text-cavs-wine",
                    children: "GLAZER LEADERBOARD"
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-slate-600 mb-12",
                    children: "Top Witnesses ranked by glaze points"
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Hall of Glaze"
                            }, void 0, false, {
                                fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: leaders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-slate-500 py-8",
                                children: "No glazers yet. Be the first to sign the petition!"
                            }, void 0, false, {
                                fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: leaders.map((leader, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 w-12 h-12 rounded-full bg-cavs-wine text-cavs-gold flex items-center justify-center font-bold",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitials"])(leader.name)
                                            }, void 0, false, {
                                                fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                                lineNumber: 71,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-slate-900 truncate",
                                                        children: leader.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-slate-500",
                                                        children: [
                                                            "Last seen: ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(leader.lastSeen)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                                lineNumber: 75,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "default",
                                                        className: "text-base px-3 py-1",
                                                        children: [
                                                            leader.points,
                                                            " pts"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 23
                                                    }, this),
                                                    index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: "👑"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 39
                                                    }, this),
                                                    index === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: "🥈"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 39
                                                    }, this),
                                                    index === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: "🥉"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                                lineNumber: 84,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, leader.id, true, {
                                        fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                        lineNumber: 67,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-sm text-slate-500 mt-6",
                    children: "Earn points by signing petitions, sharing, and engaging with content"
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/glazer-leaderboard.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(GlazerLeaderboard, "FKaCzdRRT71i5zMzmrnYXWFqgMk=");
_c = GlazerLeaderboard;
var _c;
__turbopack_context__.k.register(_c, "GlazerLeaderboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/textarea.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = "Textarea";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/ui/slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Slider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, onValueChange, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "range",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cavs-wine", className),
        ref: ref,
        onChange: (e)=>onValueChange?.(Number(e.target.value)),
        ...props
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/ui/slider.tsx",
        lineNumber: 12,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Slider;
Slider.displayName = "Slider";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Slider$React.forwardRef");
__turbopack_context__.k.register(_c1, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sassy-mate/components/petition-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PetitionForm",
    ()=>PetitionForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/components/ui/slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sassy-mate/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function PetitionForm() {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [reason, setReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [goatScore, setGoatScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!name || !reason) return;
        const petitionData = {
            id: Date.now().toString(),
            name,
            reason,
            goatScore,
            goatRank: getLabel(),
            timestamp: Date.now()
        };
        // Store in localStorage (for local dev and backup)
        const petitions = JSON.parse(localStorage.getItem("petitions") || "[]");
        petitions.push(petitionData);
        localStorage.setItem("petitions", JSON.stringify(petitions));
        // Add to leaderboard in localStorage
        const leaders = JSON.parse(localStorage.getItem("leaders") || "[]");
        const existing = leaders.find((l)=>l.name === name);
        if (existing) {
            existing.points += 10;
            existing.lastSeen = new Date().toISOString();
        } else {
            leaders.push({
                id: Date.now().toString(),
                name,
                points: 10,
                lastSeen: new Date().toISOString()
            });
        }
        localStorage.setItem("leaders", JSON.stringify(leaders));
        // Submit to Redis API (production only)
        try {
            await fetch("/api/witnesses/petitions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: petitionData.name,
                    reason: petitionData.reason,
                    goatScore: petitionData.goatScore,
                    goatRank: petitionData.goatRank
                })
            });
            // Submit vote to poll API
            await fetch("/api/poll/goat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    score: goatScore
                })
            });
        } catch (error) {
            console.error("Failed to submit to API:", error);
        // Continue anyway - localStorage is the backup
        }
        // Confetti if high score
        if (goatScore > 92) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                particleCount: 100,
                spread: 70,
                origin: {
                    y: 0.6
                },
                colors: [
                    "#6F263D",
                    "#FFB81C",
                    "#041E42"
                ]
            });
        }
        setSubmitted(true);
        setName("");
        setReason("");
        setGoatScore(50);
        setTimeout(()=>setSubmitted(false), 3000);
    };
    const getLabel = ()=>{
        if (goatScore < 30) return "Needs More Evidence";
        if (goatScore < 50) return "Getting There";
        if (goatScore < 70) return "Solid Case";
        if (goatScore < 90) return "Strong Believer";
        if (goatScore < 93) return "True Witness";
        return "CERTIFIED WITNESS 👑";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "petition",
        className: "py-20 px-4 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-4xl sm:text-5xl text-center mb-4 text-cavs-wine",
                    children: "SIGN THE PETITION"
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/petition-form.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-slate-600 mb-8 sm:mb-12",
                    children: "Add your voice to the Witness Protection Program"
                }, void 0, false, {
                    fileName: "[project]/sassy-mate/components/petition-form.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-xl sm:text-2xl",
                                    children: "Declare Your Allegiance"
                                }, void 0, false, {
                                    fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Share why LeBron is the GOAT and rate his greatness"
                                }, void 0, false, {
                                    fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sassy-mate/components/petition-form.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "block text-sm font-medium mb-2",
                                                children: "Your Name"
                                            }, void 0, false, {
                                                fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "name",
                                                type: "text",
                                                value: name,
                                                onChange: (e)=>setName(e.target.value),
                                                placeholder: "Enter your name",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "reason",
                                                className: "block text-sm font-medium mb-2",
                                                children: "Why LeBron is the GOAT"
                                            }, void 0, false, {
                                                fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                id: "reason",
                                                value: reason,
                                                onChange: (e)=>setReason(e.target.value),
                                                placeholder: "Share your testimony...",
                                                rows: 4,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-3",
                                                children: "GOAT-o-meter: Rate LeBron's Greatness"
                                            }, void 0, false, {
                                                fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-5xl sm:text-6xl font-display text-cavs-wine mb-1",
                                                                children: goatScore
                                                            }, void 0, false, {
                                                                fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-slate-600 font-semibold",
                                                                children: getLabel()
                                                            }, void 0, false, {
                                                                fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                        min: 0,
                                                        max: 100,
                                                        value: goatScore,
                                                        onValueChange: (value)=>setGoatScore(value),
                                                        className: "w-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-xs text-slate-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Not the GOAT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "ABSOLUTE GOAT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this),
                                                    goatScore > 92 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center text-sm text-cavs-wine font-semibold animate-pulse",
                                                        children: "Welcome to the Witness Protection Program! 👑"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "w-full",
                                        size: "lg",
                                        children: submitted ? "Signed! 👑" : "Sign the Petition"
                                    }, void 0, false, {
                                        fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this),
                                    submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sassy$2d$mate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-sm text-cavs-wine font-semibold",
                                        children: [
                                            "Petition signed! +",
                                            goatScore,
                                            " Glaze Points"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sassy-mate/components/petition-form.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sassy-mate/components/petition-form.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sassy-mate/components/petition-form.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sassy-mate/components/petition-form.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sassy-mate/components/petition-form.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(PetitionForm, "ReMNQVXb4d8PpH8jt0/KH1u0wUo=");
_c = PetitionForm;
var _c;
__turbopack_context__.k.register(_c, "PetitionForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sassy-mate_438fa722._.js.map