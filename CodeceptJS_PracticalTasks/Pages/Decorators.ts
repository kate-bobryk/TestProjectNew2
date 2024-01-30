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

export function id(target: any, key: string): any {
  let original = target[key];
  Reflect.deleteProperty(target, key);
  Reflect.defineProperty(target, key, {
    get: () => original,
    set: (newVal) => {
      original = { xpath: `//*[@id='${newVal}']` };
    },
  });
}

export function data_test(target: any, key: string): any {
  let original = target[key];
  Reflect.deleteProperty(target, key);
  Reflect.defineProperty(target, key, {
    get: () => original,
    set: (newVal) => {
      original = { xpath: `//*[@data-test='${newVal}']` };
    },
  });
}

export function data_testid(target: any, key: string): any {
  let original = target[key];
  Reflect.deleteProperty(target, key);
  Reflect.defineProperty(target, key, {
    get: () => original,
    set: (newVal) => {
      original = { xpath: `//*[@data-testid='${newVal}']` };
    },
  });
}
