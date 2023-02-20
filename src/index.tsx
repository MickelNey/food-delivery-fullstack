import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter} from "react-router-dom";
import { ReactQueryDevtools} from "@tanstack/react-query-devtools";

import './static/css/fonts.css';
import './static/css/vars.scss';
import './static/css/normalize.scss';
import './static/css/icon-fonts.css'
import './index.css';


import {AuthProvider} from "./entities/Auth";

const container = document.getElementById('root')!;
const root = createRoot(container);
const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
