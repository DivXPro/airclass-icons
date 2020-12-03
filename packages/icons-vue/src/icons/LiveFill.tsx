// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LiveFillSvg from '@airclass/icons-svg/lib/asn/LiveFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LiveFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LiveFillSvg}></AntdIcon>;
};

LiveFill.displayName = 'LiveFill';
LiveFill.inheritAttrs = false;
export default LiveFill;