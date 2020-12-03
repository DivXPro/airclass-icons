// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpeedMiniFillSvg from '@airclass/icons-svg/lib/asn/SpeedMiniFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpeedMiniFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeedMiniFillSvg}></AntdIcon>;
};

SpeedMiniFill.displayName = 'SpeedMiniFill';
SpeedMiniFill.inheritAttrs = false;
export default SpeedMiniFill;