export function getImageUrl(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/gurukul-study-center' : '';
  return `${basePath}${path}`;
}
