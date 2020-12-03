// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WheelchairFillSvg from '@airclass/icons-svg/lib/asn/WheelchairFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WheelchairFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WheelchairFillSvg}></AntdIcon>;
};

WheelchairFill.displayName = 'WheelchairFill';
WheelchairFill.inheritAttrs = false;
export default WheelchairFill;