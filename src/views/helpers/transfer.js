module.exports = (str) => {
  str = str.toString();
  const datt = str.split(' ');
  return `${datt[2]} ${datt[1]} ${datt[3]}`;
};
