// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatNewLineSvg from '@airclass/icons-svg/lib/asn/ChatNewLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatNewLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatNewLineSvg}></AntdIcon>;
};

ChatNewLine.displayName = 'ChatNewLine';
ChatNewLine.inheritAttrs = false;
export default ChatNewLine;