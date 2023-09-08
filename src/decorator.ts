// task 08.01

export function freeze(p: string) {
    return function (originalClass: Function, context: ClassDecoratorContext): void {
        if (context.kind === 'class') {
            console.log(`Freezing the constructor ${p}`);
            Object.freeze(originalClass);
            Object.freeze(originalClass.prototype);
        } else {
            console.log(`Decorator cannot work with ${context.kind}`);
        }
    };
}

export function logger(originalClass: Function, context: ClassDecoratorContext): any {
    if (context.kind === 'class') {
        const newConstructor = function (this: { age: number }) {
            console.log('Creating new instance');
            console.log(originalClass.name);
            this.age = 30;
        };

        newConstructor.prototype = Object.create(originalClass.prototype);
        // Object.setPrototypeOf(newConstructor.prototype, originalClass.prototype);

        newConstructor.prototype.printLibrarian = function () {
            console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
        };

        return newConstructor;
    } else {
        console.log(`Decorator cannot work with ${context.kind}`);
    }
}

export function writable(flag: boolean) {
    return function (originalMethod: Function, { kind, name, addInitializer }: ClassMethodDecoratorContext): any {
        if (kind === 'method') {
            addInitializer(function () {
                Object.defineProperty(Object.getPrototypeOf(this), name || 'missed name', {
                    writable: flag,
                    // value: originalMethod,
                });
            });
        }
    };
}

export function timeout(ms: number = 0) {
    return function (originalMethod: Function, { kind }: ClassMethodDecoratorContext): any {
        if (kind === 'method') {
            return function replacedMethod(this: any, ...args: any[]): any {
                if (window.confirm('Are you sure')) {
                    setTimeout(() => {
                        originalMethod.apply(this, args);
                    }, ms);
                }
            };
        }
    };
}

export function setInitial(inputValue: number) {
    return function (value: undefined, { kind }: ClassFieldDecoratorContext): any {
        if (kind === 'field') {
            return function (initValue: number): any {
                console.log(value);

                return inputValue + initValue;
            };
        }
    };
}

export function format<This, Return>(pref: string = 'Mr./Mrs.') {
    return function <This, Return>(
        target: ClassAccessorDecoratorTarget<This, Return>,
        { kind }: ClassAccessorDecoratorContext,
    ): any {
        if (kind === 'accessor') {
            return {
                get(this: This) {
                    return `${pref} ${target.get.call(this) as Return}`;
                },

                set(this: This, value: Return) {
                    target.set.call(this, value);
                },
            } as ClassAccessorDecoratorResult<This, Return>;
        }
    };
}

export function positiveInteger(originalSet: Function, {kind}: ClassSetterDecoratorContext) {
  if(kind == 'setter') {
    const newSet = function(this: any, value: number) {
      if(value < 1 && !Number.isInteger(value)) {
        throw new Error('Invalid value')
      }

      originalSet.call(this, value)
    }

    return newSet;
  }
}