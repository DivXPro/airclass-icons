// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ClockwiseLineSvg from '@airclass/icons-svg/lib/asn/ClockwiseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClockwiseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockwiseLineSvg}></AntdIcon>;
};

ClockwiseLine.displayName = 'ClockwiseLine';
ClockwiseLine.inheritAttrs = false;
export default ClockwiseLine;