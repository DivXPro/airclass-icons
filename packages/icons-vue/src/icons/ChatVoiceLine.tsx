// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatVoiceLineSvg from '@airclass/icons-svg/lib/asn/ChatVoiceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatVoiceLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatVoiceLineSvg}></AntdIcon>;
};

ChatVoiceLine.displayName = 'ChatVoiceLine';
ChatVoiceLine.inheritAttrs = false;
export default ChatVoiceLine;