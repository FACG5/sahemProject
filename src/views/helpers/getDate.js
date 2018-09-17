module.exports = {
  now: () => (new Date()).toISOString().substr(0, 10),
  afterMonth: () => {
    const now = new Date();
    const day = (`0${now.getDate()}`).slice(-2);
    const month = (`0${now.getMonth() + 2}`).slice(-2);
    const today = `${now.getFullYear()}-${month}-${day}`;
    return today;
  },
};
