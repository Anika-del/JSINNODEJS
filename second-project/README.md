# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


tailwind css---------------------------------------------------------------------------------------
1. link--          https://v3.tailwindcss.com/docs/guides/vite
in vs terminal
2. PS D:\JSINNODEJS\second-project>npm install -D tailwindcss@3 postcss autoprefixer
3. PS D:\JSINNODEJS\second-project>npx tailwindcss init -p
4. in tailwind.config.js paste insted --
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
5. index.css me top pr paste--
@tailwind base;
@tailwind components;
@tailwind utilities;
6. npm run dev
7. use like this --
className="text-3xl font-bold underline"
---------------------------------------------------------------------------------------------------