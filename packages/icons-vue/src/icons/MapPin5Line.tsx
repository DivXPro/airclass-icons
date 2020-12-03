// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPin5LineSvg from '@airclass/icons-svg/lib/asn/MapPin5Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPin5Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPin5LineSvg}></AntdIcon>;
};

MapPin5Line.displayName = 'MapPin5Line';
MapPin5Line.inheritAttrs = false;
export default MapPin5Line;