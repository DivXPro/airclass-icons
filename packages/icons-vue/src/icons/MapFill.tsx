// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapFillSvg from '@airclass/icons-svg/lib/asn/MapFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapFillSvg}></AntdIcon>;
};

MapFill.displayName = 'MapFill';
MapFill.inheritAttrs = false;
export default MapFill;