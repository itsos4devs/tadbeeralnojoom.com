import "../styles/globals.css";
import "../i18n";
import "mapbox-gl/dist/mapbox-gl.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "Mgo+DSMBaFt/QHRqVVhkVFpHaV1AQmFJfFBmRGJTfFZ6cFFWESFaRnZdQV1hS35Sd0ZrXXtZc3VU;Mgo+DSMBPh8sVXJ0S0J+XE9AflRBQmFLYVF2R2BJfl96d11MZFhBNQtUQF1hSn5RdEViWHxWdHBSQmld;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxLfEx0RWFab19xflZOalhVVAciSV9jS31TdEdjWH5deHBRQWZaUw==;MTE2NjE1NkAzMjMwMmUzNDJlMzBuMEg0aEVCWDFaWjVsTVFNZjYvWXBpanlJdUhudGRMVjRXckwyMEVaYVV3PQ==;MTE2NjE1N0AzMjMwMmUzNDJlMzBCSytVdDE3VDZLUzhvZUpjaDRLc0hkaDNJS1ZkZDJBTDZvSS8rWDltZENvPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmBWfFFpR2NbfE5xdV9FaFZVQGYuP1ZhSXxQdkdhWX5fc3xRQmhfV0Y=;MTE2NjE1OUAzMjMwMmUzNDJlMzBhRmFaVnFEZ1Radk91TVE1UnNod0pJMUs5WUxuZ2tWZktMbkg3SmdxODlBPQ==;MTE2NjE2MEAzMjMwMmUzNDJlMzBhT3FoUWNBbmdISHZ3Q2JZV0pEYXdIaEZyVEFINktWTFVuT1NMdXR5TUx3PQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXnxLfEx0RWFab19xflZOalhVVAciSV9jS31TdEdjWH5deHBRT2BVUw==;MTE2NjE2MkAzMjMwMmUzNDJlMzBBTllMTjVHTm5majk5YzdUcGtaYThRYjllRzdzQWljKzMxM0xiUitjZE0wPQ==;MTE2NjE2M0AzMjMwMmUzNDJlMzBLWld6K05iMjdtcW8vQ1lwS2NGRVNCQkV4MXJ0WmlNa1l3UG83b3RXQm00PQ==;MTE2NjE2NEAzMjMwMmUzNDJlMzBhRmFaVnFEZ1Radk91TVE1UnNod0pJMUs5WUxuZ2tWZktMbkg3SmdxODlBPQ=="
);

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
