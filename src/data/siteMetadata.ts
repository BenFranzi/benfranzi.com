type SiteMetadata = {
    title: string;
    description: string;
    socialBanner: string;
    siteUrl: string;
    external: {
        [key: string]: {
            label: string;
            url: string;
            icon: string;
        }
    },
    footerIcons: string[];
}

const siteMetadata: SiteMetadata = {
    title: "Ben Franzi ✌️",
    description: "Gather round, come through and dig the sound",
    socialBanner: '/me.png',
    siteUrl: 'https://www.benfranzi.com',
    external: {
        bengineerDev: {
            label: "bengineerDev",
            url: "https://www.bengineer.dev",
            icon: "/social/bengineerdev.svg",
        },
        codepen: {
            label: "codepen",
            url: "https://codepen.io/BenFranzi/",
            icon: "/social/codepen.svg"
        },
        github: {
            label: "github",
            url: "https://github.com/BenFranzi/",
            icon: "/social/github.svg"
        },
        linkedin: {
            label: "linkedin",
            url: "https://www.linkedin.com/in/benfranzi/",
            icon: "/social/linkedin.svg"
        },
        medium: {
            label: "medium",
            url: "https://medium.com/@benfranzi",
            icon: "/social/medium.svg"
        },
        twitter: {
            label: "twitter",
            url: "https://twitter.com/benfranzi",
            icon: "/social/twitter.svg"
        },
    },
    footerIcons: [
        "bengineerDev",
        "github",
        "linkedin",
    ]
}

export default siteMetadata;