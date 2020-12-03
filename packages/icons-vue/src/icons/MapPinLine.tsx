// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPinLineSvg from '@airclass/icons-svg/lib/asn/MapPinLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPinLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPinLineSvg}></AntdIcon>;
};

MapPinLine.displayName = 'MapPinLine';
MapPinLine.inheritAttrs = false;
export default MapPinLine;