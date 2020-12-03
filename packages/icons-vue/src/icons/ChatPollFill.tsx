// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatPollFillSvg from '@airclass/icons-svg/lib/asn/ChatPollFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatPollFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatPollFillSvg}></AntdIcon>;
};

ChatPollFill.displayName = 'ChatPollFill';
ChatPollFill.inheritAttrs = false;
export default ChatPollFill;