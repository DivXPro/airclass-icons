// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StarHalfLineSvg from '@airclass/icons-svg/lib/asn/StarHalfLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarHalfLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarHalfLineSvg}></AntdIcon>;
};

StarHalfLine.displayName = 'StarHalfLine';
StarHalfLine.inheritAttrs = false;
export default StarHalfLine;