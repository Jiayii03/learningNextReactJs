## Quickstart

### Server

```bash
mkdir server
cd server
npm init -y
npm i express body-parser cors dotenv helmet morgan mongoose nodemon
```

### Client

```bash
npx create-react-app client
cd client
npm i react-redux @reduxjs/toolkit react-datepicker react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid  @nivo/core @nivo/bar @nivo/pie
```

### How to use Tailwind Shades?

Hit `Ctrl + K` and then `Ctrl + G` 

### React Datepicker

Be sure to use this version of react-datepicker `npm i react-datepicker@4.8.0`

### The `useMemo()` hook for performance optimization

```js
import { useMemo } from 'react';

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```
You need to pass two things to useMemo:

1. A calculation function that takes no arguments, like `() =>`, and returns what you wanted to calculate.
2. A list of dependencies including every value within your component that’s used inside your calculation.

On the initial render, the value you’ll get from useMemo will be the result of calling your calculation.

On every subsequent render, React will compare the dependencies with the dependencies you passed during the last render. If none of the dependencies have changed (compared with Object.is), useMemo will return the value you already calculated before. Otherwise, React will re-run your calculation and return the new value.

In other words, useMemo caches a calculation result between re-renders until its dependencies change.

### React Router Dom

Layout.js
```js
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
```
The Layout component has <Outlet> and <Link> elements.

The <Outlet> renders the current route selected.

<Link> is used to set the URL and keep track of browsing history.

Anytime we link to an internal path, we will use <Link> instead of <a href="">.

The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

### Material UI - React UI Library

This project mainly depends on Material UI for the UI components. Look up the documentation for more details.

### References

- https://mui.com/system/styled/
- https://react.dev/reference/react/useMemo
- https://mui.com/material-ui/react-box/
- https://www.w3schools.com/react/react_router.asp
- https://mui.com/material-ui/react-button/
- https://mui.com/material-ui/material-icons/?theme=Outlined&query=settings