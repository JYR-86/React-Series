<h1>Tailwind Setup</h1>
- Create a react project
`npm create vite@latest my-project -- --template react`
`cd my-project`
- Use the below cmd to add tailwind
`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`
- Make changes into the tailwind.config.js file
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
- Add below code at the top of index.css file
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
- Finally run the app using
`npm run dev`

-------------------------------------
<h1>Props</h1>

- props the the properties present in the react program to make state changes.


