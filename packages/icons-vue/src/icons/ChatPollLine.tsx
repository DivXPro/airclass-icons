// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatPollLineSvg from '@airclass/icons-svg/lib/asn/ChatPollLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatPollLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatPollLineSvg}></AntdIcon>;
};

ChatPollLine.displayName = 'ChatPollLine';
ChatPollLine.inheritAttrs = false;
export default ChatPollLine;