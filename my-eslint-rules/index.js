/** @format */

const arrayMethods = ['forEach', 'map', 'filter', 'reduce'];

module.exports = {
  rules: {
    'array-anonymous-callback-function': {
      create(context) {
        let arrayMethodUsage = [];

        return {
          'Program:exit'() {
            arrayMethodUsage.forEach(function reportAnonymousFunction(
              identifier
            ) {
              const callbackFn = identifier.parent.parent.arguments[0];
              if (
                callbackFn.type === 'Identifier' ||
                (callbackFn.type === 'FunctionExpression' && callbackFn.id)
              ) {
                return;
              }

              report(callbackFn);
            });
          },
          Identifier(node) {
            if (!arrayMethods.includes(node.name)) {
              return;
            }
            arrayMethodUsage.push(node);
          },
        };

        function report(identifier) {
          context.report({
            node: identifier,
            message: 'Anonymous function is not allowed',
          });
        }
      },
    },
  },
};
