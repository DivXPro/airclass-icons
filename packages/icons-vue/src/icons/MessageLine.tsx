// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MessageLineSvg from '@airclass/icons-svg/lib/asn/MessageLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageLineSvg}></AntdIcon>;
};

MessageLine.displayName = 'MessageLine';
MessageLine.inheritAttrs = false;
export default MessageLine;