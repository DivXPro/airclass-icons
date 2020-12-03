// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatUploadLineSvg from '@airclass/icons-svg/lib/asn/ChatUploadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatUploadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatUploadLineSvg}></AntdIcon>;
};

ChatUploadLine.displayName = 'ChatUploadLine';
ChatUploadLine.inheritAttrs = false;
export default ChatUploadLine;