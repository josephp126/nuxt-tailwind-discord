
export default [
    {
        heading: "Main",
        greyed: false,
        key: "main",
        icon: "circle",
        routes: [
            {
                name: `Home`,
                route: `/`,
                key: `home`,
                routeIcon: "prehome",
            },
            {
                name: `Servers`,
                route: `/dashboard`,
                key: `dashboard`,
                routeIcon: "preservers",
            },
            {
                name: `Premium`,
                route: `/dashboard/premium`,
                key: `premium`,
                routeIcon: "prepremium",
            },
        ]
    },
    {
        heading: "Basic",
        greyed: true,
        key: "basic",
        icon: "message",
        routes: [
            {
                name: `General`,
                route: `/dashboard/main`,
                key: `main`,
                routeIcon: "pregeneral",
            },
            {
                name: `Statistics`,
                route: `/dashboard/stats`,
                key: `stats`,
                routeIcon: "prestats",
            },
            {
                name: `Commands`,
                route: `/dashboard/commands`,
                key: `commands`,
                routeIcon: "precommands",
            },
            {
                name: `Embeds`,
                route: `/dashboard/embeds`,
                key: `embeds`,
                routeIcon: "preembed",
            },
            {
                name: `Leaderboards`,
                route: `/leaderboards`,
                key: `leaderboards`,
                routeIcon: "preleaderboard",
            },
        ]
    },
    {
        heading: "Modules",
        greyed: true,
        key: "modules",
        icon: "grid",
        routes: [
            {
                name: `Welcome`,
                route: `/dashboard/welcome`,
                key: `welcome`,
                routeIcon: "prewelcome",
            },
            {
                name: `Applications`,
                route: `/dashboard/applications`,
                key: `applications`,
                routeIcon: "preapps",
            },
            {
                name: `Levels`,
                route: `/dashboard/level`,
                key: `level`,
                routeIcon: "prelevels",
            },
            {
                name: `Tags`,
                route: `/dashboard/tags`,
                key: `tags`,
                routeIcon: "pretags",
            },
            
        ]
    },
    {
        heading: "More",
        greyed: false,
        key: "more",
        icon: "pluscircle",
        routes: [
            {
                name: `Docs`,
                route: `/documentation`,
                key: `documentation`,
                routeIcon: "predocs",
            },
        ]
    },
]