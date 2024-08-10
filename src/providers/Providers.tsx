import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useRef } from "react";

import { ProvidersProps as Props } from "./Providers.types";
import { getQueryClient } from "../config/reactQuery.config";

const Providers: React.FC<Props> = (props) => {
  const { children } = props;
  const queryClientRef = useRef<QueryClient>(getQueryClient());

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
