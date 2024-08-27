import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  // check if online
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline = true;
    };

    const handleOffline = () => {
      setIsOnline = false;
    };

    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);
  }, []);

  // return online status.
  return isOnline;
};

export default useOnlineStatus;
