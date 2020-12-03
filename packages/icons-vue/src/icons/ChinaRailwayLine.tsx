// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChinaRailwayLineSvg from '@airclass/icons-svg/lib/asn/ChinaRailwayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChinaRailwayLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChinaRailwayLineSvg}></AntdIcon>;
};

ChinaRailwayLine.displayName = 'ChinaRailwayLine';
ChinaRailwayLine.inheritAttrs = false;
export default ChinaRailwayLine;