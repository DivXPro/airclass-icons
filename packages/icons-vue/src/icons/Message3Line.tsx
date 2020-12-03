// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Message3LineSvg from '@airclass/icons-svg/lib/asn/Message3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Message3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Message3LineSvg}></AntdIcon>;
};

Message3Line.displayName = 'Message3Line';
Message3Line.inheritAttrs = false;
export default Message3Line;