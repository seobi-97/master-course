import React from "react";

function page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>page</div>
      <div>{children}</div>
    </div>
  );
}

export default page;
