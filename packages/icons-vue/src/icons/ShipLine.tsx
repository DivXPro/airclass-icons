// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShipLineSvg from '@airclass/icons-svg/lib/asn/ShipLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShipLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShipLineSvg}></AntdIcon>;
};

ShipLine.displayName = 'ShipLine';
ShipLine.inheritAttrs = false;
export default ShipLine;