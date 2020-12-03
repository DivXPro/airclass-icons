// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SendBackwardSvg from '@airclass/icons-svg/lib/asn/SendBackward';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SendBackward = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendBackwardSvg}></AntdIcon>;
};

SendBackward.displayName = 'SendBackward';
SendBackward.inheritAttrs = false;
export default SendBackward;