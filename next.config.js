const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
  "@mui/icons-material", // If @mui/icons-material is being used
]);

module.exports = withTM({
  webpack: (config) => {
    return config;
  },
});
