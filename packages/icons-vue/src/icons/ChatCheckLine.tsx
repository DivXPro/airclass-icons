// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatCheckLineSvg from '@airclass/icons-svg/lib/asn/ChatCheckLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatCheckLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatCheckLineSvg}></AntdIcon>;
};

ChatCheckLine.displayName = 'ChatCheckLine';
ChatCheckLine.inheritAttrs = false;
export default ChatCheckLine;