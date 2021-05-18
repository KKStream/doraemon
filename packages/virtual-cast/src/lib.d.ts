type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
type Parameters<T> = T extends (...args: infer T) => any ? T : never;

export { Awaited, Parameters };
