// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Message2LineSvg from '@airclass/icons-svg/lib/asn/Message2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Message2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Message2LineSvg}></AntdIcon>;
};

Message2Line.displayName = 'Message2Line';
Message2Line.inheritAttrs = false;
export default Message2Line;