// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SendPlane2LineSvg from '@airclass/icons-svg/lib/asn/SendPlane2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SendPlane2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendPlane2LineSvg}></AntdIcon>;
};

SendPlane2Line.displayName = 'SendPlane2Line';
SendPlane2Line.inheritAttrs = false;
export default SendPlane2Line;