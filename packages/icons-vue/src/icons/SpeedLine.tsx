// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpeedLineSvg from '@airclass/icons-svg/lib/asn/SpeedLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpeedLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeedLineSvg}></AntdIcon>;
};

SpeedLine.displayName = 'SpeedLine';
SpeedLine.inheritAttrs = false;
export default SpeedLine;