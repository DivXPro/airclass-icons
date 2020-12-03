// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatCheckFillSvg from '@airclass/icons-svg/lib/asn/ChatCheckFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatCheckFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatCheckFillSvg}></AntdIcon>;
};

ChatCheckFill.displayName = 'ChatCheckFill';
ChatCheckFill.inheritAttrs = false;
export default ChatCheckFill;