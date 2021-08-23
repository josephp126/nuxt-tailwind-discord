import Constants from './Constants'

export default [
    {
        heading: "Main",
        greyed: false,
        routes: [
            {
                name: `Home`,
                route: `/`,
                key: `home`
            },
            {
                name: `Servers`,
                route: `/dashboard`,
                key: `dashboard`
            },
            {
                name: `Leaderboards`,
                route: `/leaderboards`,
                key: `leaderboards`
            },
        ]
    },
    {
        heading: "Basic",
        greyed: true,
        routes: [
            {
                name: `General`,
                route: `/dashboard/main`,
                key: `general`
            },
            {
                name: `Embeds`,
                route: `/dashboard/embeds`,
                key: `embeds`
            },
            {
                name: `Tags`,
                route: `/dashboard/tags`,
                key: `tags`
            },
        ]
    },
    {
        heading: "Modules",
        greyed: true,
        routes: [
            {
                name: `Applications`,
                route: `/dashboard/applications`,
                key: `applications`
            },
            {
                name: `Level`,
                route: `/dashboard/level`,
                key: `level`
            },
        ]
    },
    {
        heading: "More",
        greyed: false,
        routes: [
            {
                name: `Support`,
                route: `${Constants.Discord}`,
                key: `support`
            },
            {
                name: `Documentation`,
                route: `${Constants.Documentation}`,
                key: `documentation`
            },
        ]
    },
]