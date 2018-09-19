module.exports = {
  getPercent: (donationAmount, totalAmount) => (donationAmount / totalAmount) * (100 / 100),
  getRemain: (donationAmount, totalAmount) => totalAmount - donationAmount,
  getRemainDays: (date) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(Date.now());
    const secondDate = new Date(date);
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
  },
};
