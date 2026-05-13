import { useEffect } from "react";

export default function DashboardRedirect() {

  useEffect(() => {
    window.location.href = "http://localhost:3001";
  }, []);

  return <h1>Redirecting...</h1>;
}




