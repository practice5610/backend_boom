export const fakeDefaultExport = (
  moduleRelativePath: string,
  stubs: { [key: string]: any }
): any => {
  if (require.cache[require.resolve(moduleRelativePath)]) {
    delete require.cache[require.resolve(moduleRelativePath)];
  }
  Object.keys(stubs).forEach((dependencyRelativePath) => {
    require.cache[require.resolve(dependencyRelativePath)] = {
      exports: stubs[dependencyRelativePath],
    };
  });

  return require(moduleRelativePath);
};
