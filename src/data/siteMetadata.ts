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
            cosmeticUrl: string;
        }
    },
    footer: string[];
    meishi: string[];
}

const siteMetadata: SiteMetadata = {
    title: "Ben Franzi ✌️",
    description: "Gather round, come through and dig the sound",
    socialBanner: '/me.png',
    siteUrl: 'https://www.benfranzi.com',
    external: {
        bengineerDev: {
            label: "bengineer.dev",
            url: "https://www.bengineer.dev",
            icon: "/social/bengineerdev.svg",
            cosmeticUrl: "www.bengineer.dev"
        },
        codepen: {
            label: "codepen",
            url: "https://codepen.io/BenFranzi/",
            icon: "/social/codepen.svg",
            cosmeticUrl: "codepen.io/BenFranzi"
        },
        github: {
            label: "github",
            url: "https://github.com/BenFranzi/",
            icon: "/social/github.svg",
            cosmeticUrl: "github.benfranzi.com"
        },
        linkedin: {
            label: "linkedin",
            url: "https://www.linkedin.com/in/benfranzi/",
            icon: "/social/linkedin.svg",
            cosmeticUrl: "linkedin.benfranzi.com"
        },
        medium: {
            label: "medium",
            url: "https://medium.com/@benfranzi",
            icon: "/social/medium.svg",
            cosmeticUrl: "medium.com/@benfranzi"
        },
        twitter: {
            label: "twitter",
            url: "https://twitter.com/benfranzi",
            icon: "/social/twitter.svg",
            cosmeticUrl: "twitter.com/benfranzi"
        },
        outlook: {
            label: "email",
            url: "mailto:benfranzi@outlook.com",
            icon: "/social/email.svg",
            cosmeticUrl: "benfranzi@outlook.com"
        },
        email: {
            label: "email",
            url: "mailto:me@benfranzi.com",
            icon: "/social/email.svg",
            cosmeticUrl: "me@benfranzi.com"
        },
        phone: {
            label: "phone",
            url: "tel:+61468320236",
            icon: "/social/phone.svg",
            cosmeticUrl: "+614 6832 0236"
        },
        whatsapp: {
            label: "whatsapp",
            url: "https://wa.me/+61468320236",
            icon: "/social/whatsapp.svg",
            cosmeticUrl: "+614 6832 0236"
        }

    },
    footer: [
        "bengineerDev",
        "github",
        "linkedin",
    ],
    meishi: [
        "github",
        "linkedin",
        "email",
        "phone",
    ]
}

export default siteMetadata;