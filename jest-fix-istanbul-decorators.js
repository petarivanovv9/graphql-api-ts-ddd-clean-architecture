// See: https://github.com/kulshekhar/ts-jest/issues/1166
// and https://github.com/istanbuljs/istanbuljs/issues/70

const { default: tsJest } = require('ts-jest');

module.exports = fixIstanbulDecoratorCoverageTransformer();

function fixIstanbulDecoratorCoverageTransformer() {
  const transformer = tsJest.createTransformer({
    diagnostics: {
      warnOnly: true,
    },
    isolatedModules: true,
  });
  const process = transformer.process.bind(transformer);
  transformer.process = (...args) => {
    let result = process(...args);
    // Ignore decorators on methods and properties
    result.code = result.code.replace(
      /__decorate/g,
      '/* istanbul ignore next */__decorate',
    );

    // When constructor parameters have decorated properties (eg @inject), TS adds
    // a typeof branch check, which we don't want to instrument
    result.code = result.code.replace(
      /(?<=__metadata\("design:paramtypes".*?)(typeof \(_\w\s*=)/g,
      '/* istanbul ignore next */$1',
    );

    return result;
  };

  return transformer;
}
