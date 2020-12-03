// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatForwardFillSvg from '@airclass/icons-svg/lib/asn/ChatForwardFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatForwardFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatForwardFillSvg}></AntdIcon>;
};

ChatForwardFill.displayName = 'ChatForwardFill';
ChatForwardFill.inheritAttrs = false;
export default ChatForwardFill;