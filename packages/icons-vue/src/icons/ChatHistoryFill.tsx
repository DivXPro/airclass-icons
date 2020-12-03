// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatHistoryFillSvg from '@airclass/icons-svg/lib/asn/ChatHistoryFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatHistoryFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatHistoryFillSvg}></AntdIcon>;
};

ChatHistoryFill.displayName = 'ChatHistoryFill';
ChatHistoryFill.inheritAttrs = false;
export default ChatHistoryFill;