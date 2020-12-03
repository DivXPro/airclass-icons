// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RedPacketLineSvg from '@airclass/icons-svg/lib/asn/RedPacketLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedPacketLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedPacketLineSvg}></AntdIcon>;
};

RedPacketLine.displayName = 'RedPacketLine';
RedPacketLine.inheritAttrs = false;
export default RedPacketLine;