import * as React from "react";
import { NavBar } from "components/ui/Navbar";
export type LayoutProps = {
  children: React.ReactNode;
};
export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
