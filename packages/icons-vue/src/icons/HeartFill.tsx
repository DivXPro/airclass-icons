// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeartFillSvg from '@airclass/icons-svg/lib/asn/HeartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartFillSvg}></AntdIcon>;
};

HeartFill.displayName = 'HeartFill';
HeartFill.inheritAttrs = false;
export default HeartFill;