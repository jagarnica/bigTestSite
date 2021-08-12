import * as React from "react";
import { Layout } from "components/Layout/";

export function withLayout(Component: React.ComponentType): JSX.Element {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}
