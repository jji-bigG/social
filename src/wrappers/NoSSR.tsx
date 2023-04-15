import dynamic from "next/dynamic";
import React from "react";

const NoSSR = (props: any) => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});

export const NoSSRHOC = (el: React.ComponentType) =>
  dynamic(() => Promise.resolve(el), { ssr: false });
