// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MapLineSvg from '@airclass/icons-svg/lib/asn/MapLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MapLineSvg}></AntdIcon>;
};

MapLine.displayName = 'MapLine';
MapLine.inheritAttrs = false;
export default MapLine;