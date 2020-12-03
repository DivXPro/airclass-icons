// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPinUserLineSvg from '@airclass/icons-svg/lib/asn/MapPinUserLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPinUserLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPinUserLineSvg}></AntdIcon>;
};

MapPinUserLine.displayName = 'MapPinUserLine';
MapPinUserLine.inheritAttrs = false;
export default MapPinUserLine;