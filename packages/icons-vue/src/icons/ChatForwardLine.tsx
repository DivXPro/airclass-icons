// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatForwardLineSvg from '@airclass/icons-svg/lib/asn/ChatForwardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatForwardLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatForwardLineSvg}></AntdIcon>;
};

ChatForwardLine.displayName = 'ChatForwardLine';
ChatForwardLine.inheritAttrs = false;
export default ChatForwardLine;