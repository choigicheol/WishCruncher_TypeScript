const config = {
  URL:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_RELEASE_URL
      : process.env.REACT_APP_DEV_URL,
};

export default config;
