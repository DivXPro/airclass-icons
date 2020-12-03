// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPinAddLineSvg from '@airclass/icons-svg/lib/asn/MapPinAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPinAddLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPinAddLineSvg}></AntdIcon>;
};

MapPinAddLine.displayName = 'MapPinAddLine';
MapPinAddLine.inheritAttrs = false;
export default MapPinAddLine;