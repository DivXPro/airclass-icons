// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PingPongFillSvg from '@airclass/icons-svg/lib/asn/PingPongFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PingPongFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PingPongFillSvg}></AntdIcon>;
};

PingPongFill.displayName = 'PingPongFill';
PingPongFill.inheritAttrs = false;
export default PingPongFill;