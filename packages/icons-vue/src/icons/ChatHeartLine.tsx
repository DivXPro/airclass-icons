// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatHeartLineSvg from '@airclass/icons-svg/lib/asn/ChatHeartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatHeartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatHeartLineSvg}></AntdIcon>;
};

ChatHeartLine.displayName = 'ChatHeartLine';
ChatHeartLine.inheritAttrs = false;
export default ChatHeartLine;