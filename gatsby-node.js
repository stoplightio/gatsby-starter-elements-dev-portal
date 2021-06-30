exports.onCreateWebpackConfig = ({ stage, loaders, actions, plugins }) => {
    actions.setWebpackConfig({
      resolve: {
        fallback: {
          "http": false,
          "https": false,
          "stream": false,
          "path": false,
          "process": false,
        }
      }
    });
  
    if (stage === 'build-javascript' || stage === 'develop') {
      actions.setWebpackConfig({
        plugins: [
          plugins.provide({ process: 'process/browser'})
        ]
      })
    }
  
    if (stage === 'build-html') {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /canvas/,
              use: loaders.null(),
            },
          ],
        },
      });
    }
  };
  