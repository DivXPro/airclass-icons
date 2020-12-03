// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatHeartFillSvg from '@airclass/icons-svg/lib/asn/ChatHeartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatHeartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatHeartFillSvg}></AntdIcon>;
};

ChatHeartFill.displayName = 'ChatHeartFill';
ChatHeartFill.inheritAttrs = false;
export default ChatHeartFill;