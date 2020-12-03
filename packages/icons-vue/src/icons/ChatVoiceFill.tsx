// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatVoiceFillSvg from '@airclass/icons-svg/lib/asn/ChatVoiceFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatVoiceFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatVoiceFillSvg}></AntdIcon>;
};

ChatVoiceFill.displayName = 'ChatVoiceFill';
ChatVoiceFill.inheritAttrs = false;
export default ChatVoiceFill;