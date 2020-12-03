// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPinFillSvg from '@airclass/icons-svg/lib/asn/MapPinFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPinFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPinFillSvg}></AntdIcon>;
};

MapPinFill.displayName = 'MapPinFill';
MapPinFill.inheritAttrs = false;
export default MapPinFill;