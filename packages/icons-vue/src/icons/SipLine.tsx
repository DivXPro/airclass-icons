// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SipLineSvg from '@airclass/icons-svg/lib/asn/SipLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SipLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SipLineSvg}></AntdIcon>;
};

SipLine.displayName = 'SipLine';
SipLine.inheritAttrs = false;
export default SipLine;