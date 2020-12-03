// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MessageFillSvg from '@airclass/icons-svg/lib/asn/MessageFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageFillSvg}></AntdIcon>;
};

MessageFill.displayName = 'MessageFill';
MessageFill.inheritAttrs = false;
export default MessageFill;