// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPinAddFillSvg from '@airclass/icons-svg/lib/asn/MapPinAddFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPinAddFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPinAddFillSvg}></AntdIcon>;
};

MapPinAddFill.displayName = 'MapPinAddFill';
MapPinAddFill.inheritAttrs = false;
export default MapPinAddFill;