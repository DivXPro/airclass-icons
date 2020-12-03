// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PriceTag2LineSvg from '@airclass/icons-svg/lib/asn/PriceTag2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PriceTag2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PriceTag2LineSvg}></AntdIcon>;
};

PriceTag2Line.displayName = 'PriceTag2Line';
PriceTag2Line.inheritAttrs = false;
export default PriceTag2Line;