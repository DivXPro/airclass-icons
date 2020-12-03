// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShieldCrossLineSvg from '@airclass/icons-svg/lib/asn/ShieldCrossLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldCrossLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldCrossLineSvg}></AntdIcon>;
};

ShieldCrossLine.displayName = 'ShieldCrossLine';
ShieldCrossLine.inheritAttrs = false;
export default ShieldCrossLine;