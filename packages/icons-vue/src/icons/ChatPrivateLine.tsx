// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatPrivateLineSvg from '@airclass/icons-svg/lib/asn/ChatPrivateLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatPrivateLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatPrivateLineSvg}></AntdIcon>;
};

ChatPrivateLine.displayName = 'ChatPrivateLine';
ChatPrivateLine.inheritAttrs = false;
export default ChatPrivateLine;