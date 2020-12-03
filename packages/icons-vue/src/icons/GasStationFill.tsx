// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GasStationFillSvg from '@airclass/icons-svg/lib/asn/GasStationFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GasStationFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GasStationFillSvg}></AntdIcon>;
};

GasStationFill.displayName = 'GasStationFill';
GasStationFill.inheritAttrs = false;
export default GasStationFill;