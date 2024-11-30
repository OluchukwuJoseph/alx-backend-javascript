class Utils {
  static calculateNumber (type, a, b) {
    const aApprox = Math.round(a);
    const bApprox = Math.round(b);

    if (type === 'SUM') {
      return aApprox + bApprox;
    } else if (type === 'SUBTRACT') {
      return aApprox - bApprox;
    } else if (type === 'DIVIDE') {
      if (bApprox === 0) {
        return 'Error';
      }
      return aApprox / bApprox;
    } else {
      return 'Error';
    }
  }
}

module.exports = Utils;
