// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MovieLineSvg from '@airclass/icons-svg/lib/asn/MovieLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MovieLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MovieLineSvg}></AntdIcon>;
};

MovieLine.displayName = 'MovieLine';
MovieLine.inheritAttrs = false;
export default MovieLine;