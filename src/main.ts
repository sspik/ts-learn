import * as interfaces from './interfaces';

const mySearch: interfaces.SearchFunc = function (source: string, subString: string) {
  const result = source.search(subString);
  return result === -1
};

