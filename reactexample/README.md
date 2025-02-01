# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




…or create a new repository on the command line
echo "# JSINNODEJS" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Anika-del/JSINNODEJS.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/Anika-del/JSINNODEJS.git
git branch -M main
git push -u origin main


//my style 
PS D:\JSINNODEJS> git init
Initialized empty Git repository in D:/JSINNODEJS/.git/
PS D:\JSINNODEJS> git commit -m "React code of dev Bhai"
On branch main  


PS D:\JSINNODEJS> git remote add origin https://github.com/Anika-del/JSINNODEJS.git
PS D:\JSINNODEJS> git status
On branch main

PS D:\JSINNODEJS> git add .
warning: in the working copy of 'first-project/.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'first-project/README.md', LF will be replaced by CRLF the next time Git touches it
..................................
warning: in the working copy of 'reactexample/src/App.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'reactexample/src/App.jsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'reactexample/src/index.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'reactexample/src/main.jsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'reactexample/vite.config.js', LF will be replaced by CRLF the next time Git touches it
PS D:\JSINNODEJS> git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   Ani.js
        new file:   first-project/.gitignore
        new file:   reactexample/vite.config.js

PS D:\JSINNODEJS> git commit -m " react code by dev bhai"
[main (root-commit) ca2e597]  react code by dev bhai
 51 files changed, 14712 insertions(+)
 create mode 100644 Ani.js
 create mode 100644 reactexample/vite.config.js
PS D:\JSINNODEJS> git push
fatal: The current branch main has no upstream branch.

    git push --set-upstream origin main

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS D:\JSINNODEJS> git push --set-upstream origin main
//////////////////////////////////////////////////////////////////////////////////////////////
Enumerating objects: 47, done.
Counting objects: 100% (47/47), done.
Delta compression using up to 4 threads
Compressing objects: 100% (43/43), done.
Writing objects: 100% (47/47), 51.89 KiB | 3.05 MiB/s, done.
Total 47 (delta 8), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (8/8), done.
To https://github.com/Anika-del/JSINNODEJS.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS D:\JSINNODEJS> 




tailwind css---------------------------------------------------------------------------------------
1. link--          https://v3.tailwindcss.com/docs/guides/vite
in vs terminal
2. PS D:\JSINNODEJS\reactexample>npm install -D tailwindcss@3 postcss autoprefixer
3. PS D:\JSINNODEJS\reactexample>npx tailwindcss init -p
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