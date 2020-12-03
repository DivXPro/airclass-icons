// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShieldStarLineSvg from '@airclass/icons-svg/lib/asn/ShieldStarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldStarLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldStarLineSvg}></AntdIcon>;
};

ShieldStarLine.displayName = 'ShieldStarLine';
ShieldStarLine.inheritAttrs = false;
export default ShieldStarLine;