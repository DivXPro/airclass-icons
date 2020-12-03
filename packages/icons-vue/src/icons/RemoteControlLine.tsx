// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RemoteControlLineSvg from '@airclass/icons-svg/lib/asn/RemoteControlLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RemoteControlLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RemoteControlLineSvg}></AntdIcon>;
};

RemoteControlLine.displayName = 'RemoteControlLine';
RemoteControlLine.inheritAttrs = false;
export default RemoteControlLine;