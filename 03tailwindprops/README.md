Tailwind Setup
---------------
- Create a react project
### `npm create vite@latest` 
### `cd my-project`
- Use the below cmd to add tailwind 
### `npm install -D tailwindcss postcss autoprefixer`
### `npx tailwindcss init -p`
- Make changes into the tailwind.config.js file <br/>
    export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    }
- Add below code at the top of index.css file <br/>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
- Finally run the app using
### `npm run dev`


Props
------------
- props the the properties present in the react program to make state changes.


