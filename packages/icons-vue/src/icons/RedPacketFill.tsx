// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RedPacketFillSvg from '@airclass/icons-svg/lib/asn/RedPacketFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedPacketFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedPacketFillSvg}></AntdIcon>;
};

RedPacketFill.displayName = 'RedPacketFill';
RedPacketFill.inheritAttrs = false;
export default RedPacketFill;