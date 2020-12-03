// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LiveLineSvg from '@airclass/icons-svg/lib/asn/LiveLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LiveLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LiveLineSvg}></AntdIcon>;
};

LiveLine.displayName = 'LiveLine';
LiveLine.inheritAttrs = false;
export default LiveLine;