import React from 'react'
declare global {
  namespace JSX {
  interface IntrinsicElements {
  "widget-web-component": React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
  > & {
  projectid: string;
  };
  }
  }
  }
function page() {
  return (
    <>
    <div style={{ position: "fixed", bottom: "50px", right: "20px" }}>
    <widget-web-component projectid="clzqx3o4i0003s92yqa8t5fcu"></widget-web-component>
    </div>

    <script async src="https://opinify-widget-w24d.vercel.app/widget.umd.js"></script>
    </>
  )
}

export default page