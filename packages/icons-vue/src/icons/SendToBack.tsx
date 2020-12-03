// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SendToBackSvg from '@airclass/icons-svg/lib/asn/SendToBack';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SendToBack = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendToBackSvg}></AntdIcon>;
};

SendToBack.displayName = 'SendToBack';
SendToBack.inheritAttrs = false;
export default SendToBack;