export default [
    {
        name: `Dashboard`,
        route: `/dashboard`,
        key: `dashboard`,
        icon: `sliders`
    },
    {
        name: `Support`,
        route: `/support`,
        key: `support`,
        icon: `helpcircle`
    },
    {
        name: `Documentation`,
        route: `/documentation`,
        key: `documentation`,
        icon: `book`
    },
    {
        name: `Partners`,
        route: `/partners`,
        key: `partners`,
        icon: `sliders`
    },
    {
        name: `More`,
        route: [
            {
                name2: "Premium",
                key2: "premium",
                route2: "https://patreon.com/discortics",
            },
            {
                name2: "Server List",
                key2: "servers",
                route2: "/servers",
            },
            {
                name2: "Privacy Policy",
                key2: "privacy",
                route2: "/privacy",
            },
        ],
        key: `more`,
        icon: `pluscircle`
    },
]