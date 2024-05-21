export const parseUrl = (
  baseUrl: string,
  path: string,
  params?: Record<string, any>,
) => {
  const { origin, pathname, searchParams } = new URL(
    `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`,
  );
  return `${origin}${pathname}${parseParams({ ...params, ...searchParams })}`;
};

export const parseParams = (params?: Record<string, any>) => {
  if (!params) return '';

  return (
    '?' +
    Object.entries(params)
      .map(([key, value]) =>
        Array.isArray(value) ? `${key}=${value.join(',')}` : `${key}=${value}`,
      )
      .filter((x) => !/[=undefined|=null]$/.test(x))
      .join('&')
  );
};
