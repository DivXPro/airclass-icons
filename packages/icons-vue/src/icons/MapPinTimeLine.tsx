// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapPinTimeLineSvg from '@airclass/icons-svg/lib/asn/MapPinTimeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPinTimeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapPinTimeLineSvg}></AntdIcon>;
};

MapPinTimeLine.displayName = 'MapPinTimeLine';
MapPinTimeLine.inheritAttrs = false;
export default MapPinTimeLine;