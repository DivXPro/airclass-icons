// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PingPongLineSvg from '@airclass/icons-svg/lib/asn/PingPongLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PingPongLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PingPongLineSvg}></AntdIcon>;
};

PingPongLine.displayName = 'PingPongLine';
PingPongLine.inheritAttrs = false;
export default PingPongLine;