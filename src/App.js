import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Showcase from "./components/Showcase";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Showcase />
      </QueryClientProvider>
    </div>
  );
}

export default App;
