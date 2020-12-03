// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MovieFillSvg from '@airclass/icons-svg/lib/asn/MovieFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MovieFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MovieFillSvg}></AntdIcon>;
};

MovieFill.displayName = 'MovieFill';
MovieFill.inheritAttrs = false;
export default MovieFill;