// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TreasureMapFillSvg from '@airclass/icons-svg/lib/asn/TreasureMapFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TreasureMapFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TreasureMapFillSvg}></AntdIcon>;
};

TreasureMapFill.displayName = 'TreasureMapFill';
TreasureMapFill.inheritAttrs = false;
export default TreasureMapFill;