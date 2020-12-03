// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TimeFillSvg from '@airclass/icons-svg/lib/asn/TimeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimeFillSvg}></AntdIcon>;
};

TimeFill.displayName = 'TimeFill';
TimeFill.inheritAttrs = false;
export default TimeFill;