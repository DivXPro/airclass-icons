// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatSmileLineSvg from '@airclass/icons-svg/lib/asn/ChatSmileLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatSmileLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatSmileLineSvg}></AntdIcon>;
};

ChatSmileLine.displayName = 'ChatSmileLine';
ChatSmileLine.inheritAttrs = false;
export default ChatSmileLine;