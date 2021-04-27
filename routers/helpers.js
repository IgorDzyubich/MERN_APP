/**
 * @param {function} callback Callback function.
 * @return {function} Function .
 */
function asyncWrapper(callback) {
  return (req, res, next) => {
    callback(req, res, next)
        .catch(next);
  };
}

module.exports = {
  asyncWrapper,
};
