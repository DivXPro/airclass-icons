// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TreasureMapLineSvg from '@airclass/icons-svg/lib/asn/TreasureMapLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TreasureMapLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TreasureMapLineSvg}></AntdIcon>;
};

TreasureMapLine.displayName = 'TreasureMapLine';
TreasureMapLine.inheritAttrs = false;
export default TreasureMapLine;