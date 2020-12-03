// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShipFillSvg from '@airclass/icons-svg/lib/asn/ShipFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShipFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShipFillSvg}></AntdIcon>;
};

ShipFill.displayName = 'ShipFill';
ShipFill.inheritAttrs = false;
export default ShipFill;