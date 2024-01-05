export function xpath(target: any, key: string): any {
  let original = target[key];
  Reflect.deleteProperty(target, key);
  Reflect.defineProperty(target, key, {
    get: () => original,
    set: (newVal) => {
      original = { xpath: `${newVal}` };
    },
  });
}
