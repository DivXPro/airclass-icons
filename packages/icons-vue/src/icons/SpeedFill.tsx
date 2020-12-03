// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpeedFillSvg from '@airclass/icons-svg/lib/asn/SpeedFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpeedFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeedFillSvg}></AntdIcon>;
};

SpeedFill.displayName = 'SpeedFill';
SpeedFill.inheritAttrs = false;
export default SpeedFill;