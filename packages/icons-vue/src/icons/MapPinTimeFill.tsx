// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPinTimeFillSvg from '@airclass/icons-svg/lib/asn/MapPinTimeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPinTimeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPinTimeFillSvg}></AntdIcon>;
};

MapPinTimeFill.displayName = 'MapPinTimeFill';
MapPinTimeFill.inheritAttrs = false;
export default MapPinTimeFill;