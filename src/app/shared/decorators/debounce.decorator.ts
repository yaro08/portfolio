// @ts-ignore
import { debounce } from 'lodash';

export function Debounce(ms: number) {
  return function(target: any, key: any, descriptor: any) {
    const oldFunc = descriptor.value;
    const newFunc = debounce(oldFunc, ms);
    descriptor.value = function() {
        return newFunc.apply(this, arguments);
    };
  };
}
