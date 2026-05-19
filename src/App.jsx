import React from "react";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";

function getRoute() {
  return window.location.hash.startsWith("#/")
    ? window.location.hash.slice(2)
    : "";
}

export default function App() {
  const [route, setRoute] = React.useState(getRoute);

  React.useEffect(() => {
    const handleRouteChange = () => setRoute(getRoute());

    window.addEventListener("hashchange", handleRouteChange);

    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  if (route.startsWith("services/")) {
    return <ServiceDetail slug={route.replace("services/", "")} />;
  }

  return <Home />;
}
