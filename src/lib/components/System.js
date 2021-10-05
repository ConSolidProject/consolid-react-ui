import React, { useMemo, useState, useEffect, useRef } from "react";
import mem from "mem";

const loadComponent = mem(async (scope, module) => {
  const factory = await window[scope].get(module);
  return factory;
});

const useDynamicScript = mem((args) => {
  return new Promise((resolve, reject) => {
    try {
      if (!args.url) {
        console.log("no url provided");
        reject();
      }
      const element = document.createElement("script");

      element.src = args.url;
      element.type = "text/javascript";
      element.async = true;

      document.head.appendChild(element);

      element.onload = () => {
        // console.log(`Dynamic Script Loaded: ${args.url}`);
        resolve();
      };

      element.onerror = () => {
        // console.error(`Dynamic Script Error: ${args.url}`);
        reject();
      };
    } catch (error) {
      console.log(`error`, error);
      reject(error);
    }
  });
});

const getFromRemote = mem(async ({ system }, module) => {
  try {
    await useDynamicScript(system);
    const factory = await loadComponent(system.scope, system.module);
    return factory()[module];
  } catch (error) {
    console.log(`error in getFromRemote`, error);
  }
});

const System = React.memo((props) => {
  const ref = useRef(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    getTheMount(props);
  });

  const getTheMount = async () => {
    try {
      const m = await getFromRemote(props, "default");
      m(ref.current, {
        ...props,
        // onNavigate: ({ pathname: nextPathname }) => {
        //   const { pathname } = history.location;

        //   if (pathname !== nextPathname) {
        //     history.push(nextPathname);
        //   }
        // },
      });

            
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // const Component = wrapComponent(() => <div ref={ref} />);

  return (
    <div>
      {error ? (
        <div>
          <h3>Error loading remote component</h3>
          <p>{error}</p>
          <p>Check console for more information</p>
        </div>
      ) : (
        <div ref={ref}>Loading</div>
      )}
    </div>
  );
});

export default System;
export { getFromRemote };
