exports.transparent = 'transparent';

exports.white = '#FFF';
exports.black = '#000';
exports.gray = 'rgba(0, 0, 0, 0.38)';

exports.yellow = '#FFD200';
exports.green = '#53E69D';
exports.red = '#F55E64';
exports.blue = '#40C4FE';

export function config(options) {
  const optList = Object.keys(options);
  optList.forEach(opt => {
    exports[opt] = options[opt];
  });
}
