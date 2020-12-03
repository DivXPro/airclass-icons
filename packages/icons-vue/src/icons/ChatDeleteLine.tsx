// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatDeleteLineSvg from '@airclass/icons-svg/lib/asn/ChatDeleteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatDeleteLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatDeleteLineSvg}></AntdIcon>;
};

ChatDeleteLine.displayName = 'ChatDeleteLine';
ChatDeleteLine.inheritAttrs = false;
export default ChatDeleteLine;