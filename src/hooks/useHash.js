import { useState, useEffect } from "react";

function getHash() {
  return location.hash.slice(2) || "all";
}

export default function useLocation() {
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    function hashChanged() {
      setHash(getHash());
    }

    window.addEventListener("hashchange", hashChanged);

    return () => {
      window.removeEventListener("hashchange", hashChanged);
    };
  }, []);

  return hash;
}
