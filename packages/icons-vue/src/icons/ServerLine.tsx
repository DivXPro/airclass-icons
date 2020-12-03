// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ServerLineSvg from '@airclass/icons-svg/lib/asn/ServerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ServerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ServerLineSvg}></AntdIcon>;
};

ServerLine.displayName = 'ServerLine';
ServerLine.inheritAttrs = false;
export default ServerLine;