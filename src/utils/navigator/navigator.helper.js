/**
 * Como el Navigator getCurrentPosition pero hecho promesas
 * @param {object} options
 * @returns {Promise} Resultado resolved o rejected
 */
export const getCurrentPosition = async options =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
