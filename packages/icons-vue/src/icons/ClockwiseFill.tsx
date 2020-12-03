// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ClockwiseFillSvg from '@airclass/icons-svg/lib/asn/ClockwiseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClockwiseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockwiseFillSvg}></AntdIcon>;
};

ClockwiseFill.displayName = 'ClockwiseFill';
ClockwiseFill.inheritAttrs = false;
export default ClockwiseFill;