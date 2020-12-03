// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatUploadFillSvg from '@airclass/icons-svg/lib/asn/ChatUploadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatUploadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatUploadFillSvg}></AntdIcon>;
};

ChatUploadFill.displayName = 'ChatUploadFill';
ChatUploadFill.inheritAttrs = false;
export default ChatUploadFill;