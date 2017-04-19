exports.transparent = 'transparent';

const colors = {
  white: '#FFF',
  black: '#000',
  gray: 'rgba(0, 0, 0, 0.38)',
  yellow: '#FFD200',
  green: '#53E69D',
  red: '#F55E64',
  blue: '#40C4FE'
};

exports.white = colors.white;
exports.black = colors.black;
exports.gray = colors.gray;

exports.yellow = colors.yellow;
exports.green = colors.green;
exports.red = colors.red;
exports.blue = colors.blue;

exports.config = options => {
  const optList = Object.keys(options);
  optList.forEach(opt => {
    colors[opt] = options[opt];
  });
};
