import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-cyan-100 text-center">
        <h2 className="font-extrabold text-3xl py-16 md:py-32">Blog</h2>
      </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <h2 className="mt-3 font-bold text-xl">
          1. When should you use context API?
        </h2>
        <p className="text-lg ml-6">
          The Context API in React should be used when you need to share data
          between multiple components at different levels of your application's
          component tree. It can help you avoid the need for prop drilling and
          make your code more organized and easier to maintain. The Context API
          is especially useful for managing global state that changes frequently
          over time, such as user authentication status or current theme.
          However, it's important not to overuse the Context API and only use it
          when necessary to avoid creating complex relationships between
          components.
        </p>
        <h2 className="mt-3 font-bold text-xl">2. What is a custom hook?</h2>
        <p className="text-lg ml-6">
          A custom hook in React is a function that uses built-in React hooks to
          encapsulate complex logic and stateful behavior, which can then be
          reused across multiple components in an application. Custom hooks are
          a way to extract and share stateful logic, reducing duplication of
          code and making it easier to separate concerns. They are named with
          the prefix "use" and can be used just like any other built-in React
          hook, such as useState or useEffect. Custom hooks can be created to
          manage things like form state, API calls, or any other logic that
          requires stateful behavior in a component. Using custom hooks can help
          make your code more reusable, easier to test, and more maintainable.
        </p>
        <h2 className="mt-3 font-bold text-xl">3. What is useRef?</h2>
        <p className="text-lg ml-6">
          useRef is a hook in React that returns a mutable ref object that can
          be used to store a value that persists across re-renders of a
          component. It is commonly used for accessing and manipulating DOM
          elements or for storing mutable values that don't trigger a component
          re-render when they change.
        </p>
        <h2 className="mt-3 font-bold text-xl">4. What is useMemo?</h2>
        <p className="text-lg ml-6">
          useMemo is a hook in React that is used to memoize expensive
          computations and avoid unnecessary re-renders. It takes a function and
          an array of dependencies, and returns a memoized value that is only
          recomputed when the dependencies change. This can help improve
          performance in applications with expensive computations, by preventing
          unnecessary re-renders when the input data hasn't changed.
        </p>
      </div>
    </div>
  );
};

export default Blog;
