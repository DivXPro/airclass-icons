// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPin4LineSvg from '@airclass/icons-svg/lib/asn/MapPin4Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPin4Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPin4LineSvg}></AntdIcon>;
};

MapPin4Line.displayName = 'MapPin4Line';
MapPin4Line.inheritAttrs = false;
export default MapPin4Line;