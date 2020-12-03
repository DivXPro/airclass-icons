// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatHistoryLineSvg from '@airclass/icons-svg/lib/asn/ChatHistoryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatHistoryLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatHistoryLineSvg}></AntdIcon>;
};

ChatHistoryLine.displayName = 'ChatHistoryLine';
ChatHistoryLine.inheritAttrs = false;
export default ChatHistoryLine;