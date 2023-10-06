const withSvgr = require('next-plugin-svgr');
const withExportImages = require("next-export-optimize-images");

module.exports = withSvgr(
  withExportImages({
    output: "export",
    trailingSlash: true,
    experimental: {
      serverComponents: false, 
    },
  })
);
