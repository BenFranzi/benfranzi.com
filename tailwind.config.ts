import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary": "#000",
      "secondary": "#FFF",
      "footer": "#F1F1F1",
      "accent-primary": "#FFDC00",
      "accent-secondary": "#BAFDA2",
      "accent-tertiary": "#69D3E8",
      "accent-status": "#9168FC",
      "accent-banner": "#B2FF55",
      "highlight": "#ebd1ff",
      "link": "#FF69B4",
    },
    borderRadius: {
      "circle": "100%",
    }
  },
  plugins: [],
};
export default config;
