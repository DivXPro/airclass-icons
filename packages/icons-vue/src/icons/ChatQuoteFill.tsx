// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatQuoteFillSvg from '@airclass/icons-svg/lib/asn/ChatQuoteFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatQuoteFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatQuoteFillSvg}></AntdIcon>;
};

ChatQuoteFill.displayName = 'ChatQuoteFill';
ChatQuoteFill.inheritAttrs = false;
export default ChatQuoteFill;