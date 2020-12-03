// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StarHalfFillSvg from '@airclass/icons-svg/lib/asn/StarHalfFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarHalfFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarHalfFillSvg}></AntdIcon>;
};

StarHalfFill.displayName = 'StarHalfFill';
StarHalfFill.inheritAttrs = false;
export default StarHalfFill;