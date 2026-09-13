Qu-> Name of your project
Ans->> DevStack

Qu-> A little description
Ans->> DevStack is an interactive web platform designed for developers to easily discover, compare, and assemble the right technology stack (Frontend, Backend, Database, DevOps) for their projects. It allows users to browse through modern tech options and build a personalized "Your Stack" in real time.
-Interactive Stack Builder: Add or remove technologies to your stack with a single click.
-Quick Insights: View tool categories, difficulty levels, and ratings at a glance.
-Clean & Responsive UI: Modern visual presentation for effortless project planning.

Qu-> Technology that you use
Ans->>Technologies Used:
-React.js (Dynamic State, Hooks, Props)
-Tailwind CSS (Responsive UI & Styling)
-JSON Data (data.json for dynamic items)
-React-Toastify (Interactive notifications)
-React Icons & Dynamic PNG/SVG icons

Qu-> 3 features about your project
Ans->> 3 Key Features:
-Interactive Stack Builder: Allows users to easily add or remove technologies to/from a dynamic sidebar ("Your Stack") in real time.
-Category Limit & Visual Feedback: Prevents duplicate selections per category and provides instant user feedback with smooth toast notifications and standard cursor-not-allowed states.
-Dynamic Data Rendering: Dynamically fetches and renders tech stack items, tags, levels, and icons directly from a structured data.json file.


--React questions and answers
Qu-> What is JSX, and why is it used in React?
Ans->>JSX stands for JavaScript XML. It allows you to write HTML-like elements directly inside JavaScript code, which gets converted into pure JavaScript by tools like Vite.
---Why it's used:
-Clean Code: Keeps UI components readable without typing tedious React.createElement() functions.
-Combines UI & Logic: Easily embed JavaScript expressions inside markup using { }.
-Built-in Security: Automatically escapes injected values to prevent Cross-Site Scripting attacks.

Qu-> What is the difference between props and state?
Ans->> Props are read-only data passed from a parent to a child component, which the child cannot directly modify. State, on the other hand, is a component's own mutable data that it can update internally using useState.

Qu-> What does the useState hook do, and where did you use it in this project?
Ans->> useState is a dynamic React hook that helps manage data within a component and update the UI in real-time in response to user actions. For instance, in this project, it is primarily used to maintain a dynamic list of technologies, add or remove preferred tools from "Your Stack," and track states such as button clicks or loading statuses isAdded, isLoading.

Qu-> What does the useEffect hook do, and why did you need it to load the JSON data?
Ans->> useEffect is a React hook designed to handle side-effects, such as fetching data or subscribing to events after a component renders. In this project, it was needed to automatically fetch the tech stack data from the public/data.json file as soon as the component mounts, saving the result into state to populate the UI.

Qu-> Why does every item in a .map() list need a unique key prop?
Ans->> The key prop gives every rendered list item a unique identity, allowing React to efficiently track which items have changed, been added, or removed. This helps React optimize performance by updating only the specific elements in the DOM instead of re-rendering the entire list.

Qu-> What is conditional rendering? Show one place you used it (example: the empty stack message)?
Ans->> Conditional rendering is the practice of displaying different UI elements based on specific conditions (using ternary operators ? : or logical &&). In this project, it was used to handle the "Your Stack" sidebar: displaying an empty message when no items are selected (stack.length === 0), and rendering the list of selected tech cards when items exist.

Qu-> How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans->> Data is passed from a parent to a child component using Props. To send data back from the child to the parent, the parent passes down a Callback Function as a prop, which the child component invokes during an event button click to send arguments back up to the parent.






<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# assignment-5
>>>>>>> 7d408eb34358b7df967c1a8e9a4dc6c178689b25
