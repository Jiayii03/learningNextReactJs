## Overview

Link to Youtube Tutorial: https://youtu.be/0cPCMIuDk2I?si=IY1MHTJdd6pPKxDd

![Admin dashboard preview](https://cdn.discordapp.com/attachments/1156979128948510793/1163159541387644928/image.png?ex=653e8fbd&is=652c1abd&hm=1b3cf4302e321146fca4d9bfefad79b8dd8549741748e77c7369de4f8b027dc9&)

![ERD for Data Modelling](https://cdn.discordapp.com/attachments/1121645491319484448/1165384212644384778/image.png?ex=6546a7a0&is=653432a0&hm=2e7d4f7aa1e80b3dd5b616c0005da2366516e55313eb8e1aa5313cb12036c00f&)

## Quickstart

Start server and client. Anything needs to be fetched from the back-end, server must be running.

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

## Frontend

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
The Layout component has `<Outlet>` and `<Link>` elements.

The `<Outlet>` renders the current route selected.

`<Link>` is used to set the URL and keep track of browsing history.

Anytime we link to an internal path, we will use `<Link>` instead of `<a href="">`.

The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

### Material UI - React UI Library

This project mainly depends on Material UI for the UI components. Look up the documentation to know more details about each component.

### MUI List

```js
<List>
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItemButton>
  </ListItem>
</List>
```

## Backend

### MongoDB Atlas

Link: https://cloud.mongodb.com/v2/6527f9399ee1562070202d38#/clusters

We're working on MongoDB database which essentially is a NoSQL. However, we're using Mongoose to model the data in a relational way. So that there exists a relationship between the collections.

### Redux Toolkit Query

- createSlice() / createApi()
- useGetQueryState()
- api.reducer
- configureStore()
- Provider store={store}

### Remark

1. We're not implementing a login authentication system in this project. We're just assuming that the user is already logged in.

### References

- https://mui.com/system/styled/
- https://react.dev/reference/react/useMemo
- https://mui.com/material-ui/react-box/
- https://www.w3schools.com/react/react_router.asp
- https://mui.com/material-ui/react-button/
- https://mui.com/material-ui/material-icons/?theme=Outlined&query=settings
- https://mui.com/material-ui/react-list/
- https://mui.com/material-ui/react-drawer/
- https://mui.com/material-ui/react-menu/