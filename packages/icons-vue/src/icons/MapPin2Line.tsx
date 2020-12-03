// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPin2LineSvg from '@airclass/icons-svg/lib/asn/MapPin2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPin2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPin2LineSvg}></AntdIcon>;
};

MapPin2Line.displayName = 'MapPin2Line';
MapPin2Line.inheritAttrs = false;
export default MapPin2Line;