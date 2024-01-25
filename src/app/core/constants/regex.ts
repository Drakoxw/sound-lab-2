export const REGEX = {
  NAMES: /^^[a-zA-ZÑñ '.]*$/,
  EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  PHONE: /^3(\d{2})(\d{3})(\d{4})/,
  DATES: /^(\d{4})(\/|-)(0[1-9]|1[0-2])(\/|-)([0-2][0-9]|3[0-1])$/,
  // SEGURO_S: /^(\d{3})-(\d{2})-(\d{4})/,
  MONEY: /^(\d{1,10})/,
  DAY: /\b([1-9]|[12][0-9]|3[01])\b/,
  STRANGE_CHARACTERS: /[!"#%&.`~:;_<>=*¡'”+\-?^${}()/|[\]\\]/g,
  ALF_NUM: /^[A-ZÑña-z0-9\s]+$/g,
  ALF: /^[A-ZÑña-z\s]+$/g,
  TAG_HTML: /<(?!\/?p(?=>|\s.*>))\/?.*?>/g,
  SPACES: /(\s\s|$&nbsp;)/g,
  SPACES_DOUBLE: /(\s\s)/g,
  PASS: /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,24}/
}
