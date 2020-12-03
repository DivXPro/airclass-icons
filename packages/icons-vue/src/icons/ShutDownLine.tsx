// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShutDownLineSvg from '@airclass/icons-svg/lib/asn/ShutDownLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShutDownLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShutDownLineSvg}></AntdIcon>;
};

ShutDownLine.displayName = 'ShutDownLine';
ShutDownLine.inheritAttrs = false;
export default ShutDownLine;