// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPin2FillSvg from '@airclass/icons-svg/lib/asn/MapPin2Fill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPin2Fill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPin2FillSvg}></AntdIcon>;
};

MapPin2Fill.displayName = 'MapPin2Fill';
MapPin2Fill.inheritAttrs = false;
export default MapPin2Fill;