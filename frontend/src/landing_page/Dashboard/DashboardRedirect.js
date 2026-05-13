import { useEffect } from "react";

export default function DashboardRedirect() {

  useEffect(() => {
    window.location.href = "https://stock-trading-platform-zerodha-dashboard.onrender.com/holdings";
  }, []);

  return <h1>Redirecting...</h1>;
}




