// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TruckFillSvg from '@airclass/icons-svg/lib/asn/TruckFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TruckFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckFillSvg}></AntdIcon>;
};

TruckFill.displayName = 'TruckFill';
TruckFill.inheritAttrs = false;
export default TruckFill;