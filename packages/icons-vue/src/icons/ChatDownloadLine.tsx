// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatDownloadLineSvg from '@airclass/icons-svg/lib/asn/ChatDownloadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatDownloadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatDownloadLineSvg}></AntdIcon>;
};

ChatDownloadLine.displayName = 'ChatDownloadLine';
ChatDownloadLine.inheritAttrs = false;
export default ChatDownloadLine;