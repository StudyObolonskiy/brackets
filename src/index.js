module.exports = function check(str, bracketsConfig) {
    let  pattern = bracketsConfig.map((e) => e.join(''))
    let changedStr = str;
    for (let i = 0; i < pattern.length; i++) {
      if (changedStr.includes(pattern[i])) {
        changedStr = changedStr.replace(pattern[i], '');
        i = -1;
      }
    }
    if (changedStr.length == 0) {
        return true;
    } return false;
}
