// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatSmileFillSvg from '@airclass/icons-svg/lib/asn/ChatSmileFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatSmileFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatSmileFillSvg}></AntdIcon>;
};

ChatSmileFill.displayName = 'ChatSmileFill';
ChatSmileFill.inheritAttrs = false;
export default ChatSmileFill;