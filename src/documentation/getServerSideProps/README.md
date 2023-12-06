## Server-Side Rendering with getServerSideProps

## Introduction:

Server-Side Rendering (SSR) is a technique used in Next.js to render pages on the server side, sending fully rendered HTML pages to the client. This can improve performance and SEO by providing search engines with fully rendered content.

## Implementation:

````jsx

[(./src/pages/Todo/index.js)]

import React from "react";

const Todos = ({ data }: any) => {
  return (
    <div className="p-6">
      <h2 className="text-center text-2xl">List of todos</h2>
      <ul>
        {data?.map((e: any) => {
          return (
            <li key={e.id}>
              {e.id}. {e.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();

  return { props: { data } };
}

export default Todos;
```
````

## Explanation

- The Todos component is a React functional component that renders a list of todos.
- **getServerSideProps Function**: This function is a special Next.js function that runs on the server side. It fetches data from an external API (JSONPlaceholder) and returns it as props to the component. - **Fetching Data**: The fetch function is used to retrieve data from the specified API endpoint (https://jsonplaceholder.typicode.com/todos). The fetched data is then converted to JSON.
- The fetched data is returned as props to the Todos component, making it available for rendering.

## When does getServerSideProps run:

getServerSideProps only runs on server-side and never runs on the browser. If a page uses getServerSideProps, then:

- When you request this page directly, getServerSideProps runs at request time, and this page will be pre-rendered with the returned props
- getServerSideProps returns JSON which will be used to render the page. All this work will be handled automatically by Next.js, so you don’t need to do anything extra as long as you have getServerSideProps defined.
- getServerSideProps can only be exported from a page. You can’t export it from non-page files.
