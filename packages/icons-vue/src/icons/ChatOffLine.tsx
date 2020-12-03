// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatOffLineSvg from '@airclass/icons-svg/lib/asn/ChatOffLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatOffLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatOffLineSvg}></AntdIcon>;
};

ChatOffLine.displayName = 'ChatOffLine';
ChatOffLine.inheritAttrs = false;
export default ChatOffLine;