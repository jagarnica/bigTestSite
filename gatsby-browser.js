import React from "react";

// Base Layout
import { Layout } from "./src/components/Layout";

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
