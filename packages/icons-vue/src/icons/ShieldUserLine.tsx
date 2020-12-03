// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShieldUserLineSvg from '@airclass/icons-svg/lib/asn/ShieldUserLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldUserLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldUserLineSvg}></AntdIcon>;
};

ShieldUserLine.displayName = 'ShieldUserLine';
ShieldUserLine.inheritAttrs = false;
export default ShieldUserLine;