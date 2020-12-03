// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GasStationLineSvg from '@airclass/icons-svg/lib/asn/GasStationLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GasStationLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GasStationLineSvg}></AntdIcon>;
};

GasStationLine.displayName = 'GasStationLine';
GasStationLine.inheritAttrs = false;
export default GasStationLine;