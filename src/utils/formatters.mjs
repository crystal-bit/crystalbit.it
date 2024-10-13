export const formatters = {
  /**
   * @param {string} dateStr
   */
  date(dateStr) {
    let formattedDate = new Date(dateStr).toLocaleDateString();
    return formattedDate;
  },
};
