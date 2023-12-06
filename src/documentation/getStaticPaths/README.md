### Static Site Generation with Dynamic Routes using getStaticPaths

## Introduction:

- getStaticPaths is a Next.js function used for Static Site Generation (SSG) with dynamic routes. It allows you to specify which paths should be pre-rendered at build time. This function works in conjunction with getStaticProps to generate dynamic, statically generated pages.

## Implementation :

```jsx
import { useRouter } from "next/router";
import React from "react";

const CharacterDetail = ({ characterSlug }: any) => {
  return (
    <div>
      <h2 className="text-center mt-6">{characterSlug?.userName}'s Details</h2>
      <p>User ID: {characterSlug?.userID}</p>
      <p>Name: {characterSlug?.userName}</p>
    </div>
  );
};

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://drab-shorts-moth.cyclic.app/userDetail/?id=${params.userID}`
  );
  const characterSlug = await res.json();
  return { props: { characterSlug } };
}

export async function getStaticPaths() {
  const res = await fetch("https://drab-shorts-moth.cyclic.app");
  const data = await res.json();
  const userIDs = data?.data;

  const paths = userIDs.map((userID: string) => ({ params: { userID } }));

  return { paths, fallback: false };
}

export default CharacterDetail;
```

## Explanation :

- The CharacterDetail component is a React functional component that renders detailed information about a specific character.

- **getStaticProps Function**: This function fetches data for a specific character based on the dynamic route parameter (params.userID) and returns it as props to the component.

- **getStaticPaths Function**: This function specifies which paths should be pre-rendered at build time. It fetches a list of all user IDs and generates an array of objects with the `params` key containing user IDs. This array is returned to Next.js.

- **Dynamic Paths**: The getStaticPaths function provides dynamic paths to Next.js, allowing it to pre-render pages for each user ID.

- By combining getStaticProps and getStaticPaths, you can create statically generated pages with dynamic routes in Next.js. The getStaticPaths function plays a crucial role in determining which dynamic paths should be pre-rendered during the build process.
