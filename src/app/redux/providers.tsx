"use client"; // This makes the file a Client Component

import { Provider } from "react-redux";
import { store } from "./store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
