import "../styles/globals.css";
import "../i18n";
import "mapbox-gl/dist/mapbox-gl.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const progress = new ProgressBar({
  size: 4,
  color: "#eaa625",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60000 } },
});
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
