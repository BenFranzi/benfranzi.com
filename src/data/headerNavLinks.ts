import siteMetadata from "@/data/siteMetadata";

const headerNavLinks = [
    { title: 'home', href: '/' },
    // { title: 'about', href: '/about' },
    { title: 'about', href: siteMetadata.external.linkedin.url }, // TODO: implement about page
];
export default headerNavLinks;