// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPinRangeLineSvg from '@airclass/icons-svg/lib/asn/MapPinRangeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPinRangeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPinRangeLineSvg}></AntdIcon>;
};

MapPinRangeLine.displayName = 'MapPinRangeLine';
MapPinRangeLine.inheritAttrs = false;
export default MapPinRangeLine;