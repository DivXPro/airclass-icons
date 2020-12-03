// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Chat2LineSvg from '@airclass/icons-svg/lib/asn/Chat2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Chat2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chat2LineSvg}></AntdIcon>;
};

Chat2Line.displayName = 'Chat2Line';
Chat2Line.inheritAttrs = false;
export default Chat2Line;