// eslint-disable-next-line import/no-anonymous-default-export
import { bp } from './breakpoints';

// For changing Breakpoints do so in Breakpoint file
export default {
  up(size) {
    const sizes = {
      xs: `${bp.xs}px`,
      sm: `${bp.sm}px`,
      md: `${bp.md}px`,
      lg: `${bp.lg}px`,
      xl: `${bp.xl}px`,
      xxl: `${bp.xxl}px`,
    };
    return `@media (min-width: ${sizes[size]})`;
  },
  down(size) {
    const sizes = {
      xs: `${bp.xs}px`,
      sm: `${bp.sm}px`,
      md: `${bp.md}px`,
      lg: `${bp.lg}px`,
      xl: `${bp.xl}px`,
      xxl: `${bp.xxl}px`,
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};
