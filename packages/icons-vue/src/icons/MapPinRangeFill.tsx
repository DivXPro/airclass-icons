// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPinRangeFillSvg from '@airclass/icons-svg/lib/asn/MapPinRangeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPinRangeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPinRangeFillSvg}></AntdIcon>;
};

MapPinRangeFill.displayName = 'MapPinRangeFill';
MapPinRangeFill.inheritAttrs = false;
export default MapPinRangeFill;