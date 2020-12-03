// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PriceTag3LineSvg from '@airclass/icons-svg/lib/asn/PriceTag3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PriceTag3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PriceTag3LineSvg}></AntdIcon>;
};

PriceTag3Line.displayName = 'PriceTag3Line';
PriceTag3Line.inheritAttrs = false;
export default PriceTag3Line;