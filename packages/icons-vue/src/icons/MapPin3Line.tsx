// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPin3LineSvg from '@airclass/icons-svg/lib/asn/MapPin3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPin3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPin3LineSvg}></AntdIcon>;
};

MapPin3Line.displayName = 'MapPin3Line';
MapPin3Line.inheritAttrs = false;
export default MapPin3Line;