// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatFollowUpLineSvg from '@airclass/icons-svg/lib/asn/ChatFollowUpLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatFollowUpLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatFollowUpLineSvg}></AntdIcon>;
};

ChatFollowUpLine.displayName = 'ChatFollowUpLine';
ChatFollowUpLine.inheritAttrs = false;
export default ChatFollowUpLine;