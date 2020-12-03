// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SipFillSvg from '@airclass/icons-svg/lib/asn/SipFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SipFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SipFillSvg}></AntdIcon>;
};

SipFill.displayName = 'SipFill';
SipFill.inheritAttrs = false;
export default SipFill;