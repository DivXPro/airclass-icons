// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChatOffFillSvg from '@airclass/icons-svg/lib/asn/ChatOffFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChatOffFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChatOffFillSvg}></AntdIcon>;
};

ChatOffFill.displayName = 'ChatOffFill';
ChatOffFill.inheritAttrs = false;
export default ChatOffFill;