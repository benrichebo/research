export const useStorage = () => {
  const sessionStorage = {
    getItem(key) {
      const storage = window.sessionStorage.getItem(key);
      return JSON.parse(storage);
    },

    setItem(key, value) {
      if (value) window.sessionStorage.setItem(key, JSON.stringify(value));
      this.getItem(key);
    },

    clearItem(key) {
      sessionStorage.clear(key);
      this.setItem(null);
    },
  };

  const localStorage = {
    getItem(key) {
      const storage = window.localStorage.getItem(key);
      return JSON.parse(storage);
    },

    setItem(key, value) {
      if (value) window.localStorage.setItem(key, JSON.stringify(value));
      this.getItem(key);
    },

    clearItem(key) {
      localStorage.clear(key);
      this.setItem(null);
      this.getItem(key);
    },
  };

  /* //check if item exist
  useEffect(() => {
    if (type == "session") {
      const sessionData = sessionStorage.getItem();
      setData(sessionData);
    }

    if (type == "local") {
      const localData = localStorage.getItem();
      setData(localData);
    }
  }, []); */

  return { sessionStorage, localStorage };
};
