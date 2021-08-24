import Constants from './Constants'

export default [
    {
        heading: "Main",
        greyed: false,
        icon: "circle",
        routes: [
            {
                name: `Home`,
                route: `/`,
                key: `home`,
                routeIcon: "home",
            },
            {
                name: `Servers`,
                route: `/dashboard`,
                key: `dashboard`,
                routeIcon: "server",
            },
            {
                name: `Leaderboards`,
                route: `/leaderboards`,
                key: `leaderboards`,
                routeIcon: "bar",
            },
        ]
    },
    {
        heading: "Basic",
        greyed: true,
        icon: "circle",
        routes: [
            {
                name: `General`,
                route: `/dashboard/main`,
                key: `general`,
                routeIcon: "grid",
            },
            {
                name: `Embeds`,
                route: `/dashboard/embeds`,
                key: `embeds`,
                routeIcon: "paperclip",
            },
            {
                name: `Tags`,
                route: `/dashboard/tags`,
                key: `tags`,
                routeIcon: "tag",
            },
        ]
    },
    {
        heading: "Modules",
        greyed: true,
        icon: "circle",
        routes: [
            {
                name: `Applications`,
                route: `/dashboard/applications`,
                key: `applications`,
                routeIcon: "file",
            },
            {
                name: `Level`,
                route: `/dashboard/level`,
                key: `level`,
                routeIcon: "award",
            },
        ]
    },
    {
        heading: "More",
        greyed: false,
        icon: "circle",
        routes: [
            {
                name: `Support`,
                route: `${Constants.Discord}`,
                key: `support`,
                routeIcon: "helpcircle",
            },
            {
                name: `Documentation`,
                route: `${Constants.Documentation}`,
                key: `documentation`,
                routeIcon: "book",
            },
        ]
    },
]