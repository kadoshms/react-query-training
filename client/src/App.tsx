import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { MainLayout } from "./MainLayout";
import { FiltersProvider } from "./providers";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FiltersProvider>
        <ChakraProvider>
          <MainLayout />
          <ReactQueryDevtools initialIsOpen={false} />
        </ChakraProvider>
      </FiltersProvider>
    </QueryClientProvider>
  );
}

export default App;
