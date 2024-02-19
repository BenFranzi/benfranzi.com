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
      "accent-primary": "#FFDC00",
      "accent-secondary": "#BAFDA2",
      "accent-tertiary": "#69D3E8",
      "accent-status": "#9168FC",
    },
    borderRadius: {
      "circle": "100%",
    }
  },
  plugins: [],
};
export default config;
