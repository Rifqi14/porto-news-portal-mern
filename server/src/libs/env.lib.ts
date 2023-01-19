export const isDev = (): boolean => {
  return (
    <string>process.env.NODE_ENV?.toLowerCase().trim() === 'dev' ||
    <string>process.env.NODE_ENV?.toLowerCase().trim() === 'development'
  );
};

export const isValid = (key: string): boolean => {
  return process.env[key] != undefined;
};

export const getWithDefault = (
  key: string,
  value: string | number,
): string | number => {
  return isValid(key) ? <string>process.env[key] : value;
};

export const getEnv = (key: string): string => {
  return <string>process.env[key];
};
