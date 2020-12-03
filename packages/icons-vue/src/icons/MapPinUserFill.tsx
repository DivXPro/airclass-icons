// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPinUserFillSvg from '@airclass/icons-svg/lib/asn/MapPinUserFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPinUserFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPinUserFillSvg}></AntdIcon>;
};

MapPinUserFill.displayName = 'MapPinUserFill';
MapPinUserFill.inheritAttrs = false;
export default MapPinUserFill;