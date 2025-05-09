export const isTouchDevice =
  typeof window !== 'undefined' && window.matchMedia('(hover:none)').matches;
