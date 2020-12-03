// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatQuoteLineSvg from '@airclass/icons-svg/lib/asn/ChatQuoteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatQuoteLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatQuoteLineSvg}></AntdIcon>;
};

ChatQuoteLine.displayName = 'ChatQuoteLine';
ChatQuoteLine.inheritAttrs = false;
export default ChatQuoteLine;