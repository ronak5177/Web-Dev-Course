## How to setup tailwind css

Step 1: Run the followind commands

```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Update tailwind.config.js to include the below line in module.exports:

```
content: ["*.html"],
```

Step 3: Create src/input.css to include:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Run the following command

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Step 4: Include src/output.css file to your html

