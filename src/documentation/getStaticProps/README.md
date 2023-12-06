## Static Site Generation with getStaticProps

## Introduction

Static Site Generation (SSG) is another rendering technique in Next.js. It generates static HTML pages at build time, reducing the need for server-side processing.

## Implementation

```jsx
import React from "react";

const Characters = ({ data }: any) => {
  console.log(data, "data");
  return (
    <div>
      <h2 className="text-center mt-6">List of characters</h2>
      <ul className="p-10 text-centers">
        {data.data.map((e: any) => (
          <li key={e.userID}>
            {e?.userID}.{e.userName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const res = await fetch("https://drab-shorts-moth.cyclic.app/");

  const data = await res.json();

  // Return the data as props with revalidation set to 10 seconds
  return { props: { data }, revalidate: 10 };
}

// Export the component as the default export
export default Characters;
```

## Explanation

1.The Characters component is a React functional component that renders a list of characters.

2.**getStaticProps Function**: This function is a special Next.js function that runs at build time. It fetches data from an external API (in this case, a URL) and returns it as props to the component.

3.**Fetching Data**: The fetch function is used to retrieve data from the specified API endpoint (https://drab-shorts-moth.cyclic.app/). The fetched data is then converted to JSON.

4.**Props and Revalidation**: The fetched data is returned as props to the Characters component. Additionally, the revalidate option is set to 10 seconds, indicating that the page should be revalidated and rebuilt every 10 seconds. Which is also known as <a href="https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration" target="_blank">Incremental Static Regeneration</a>
