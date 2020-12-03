// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Movie2LineSvg from '@airclass/icons-svg/lib/asn/Movie2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Movie2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Movie2LineSvg}></AntdIcon>;
};

Movie2Line.displayName = 'Movie2Line';
Movie2Line.inheritAttrs = false;
export default Movie2Line;