// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Chat1LineSvg from '@airclass/icons-svg/lib/asn/Chat1Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Chat1Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Chat1LineSvg}></AntdIcon>;
};

Chat1Line.displayName = 'Chat1Line';
Chat1Line.inheritAttrs = false;
export default Chat1Line;