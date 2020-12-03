// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BroadcastLineSvg from '@airclass/icons-svg/lib/asn/BroadcastLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BroadcastLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BroadcastLineSvg}></AntdIcon>;
};

BroadcastLine.displayName = 'BroadcastLine';
BroadcastLine.inheritAttrs = false;
export default BroadcastLine;