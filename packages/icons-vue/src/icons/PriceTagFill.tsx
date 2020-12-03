// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PriceTagFillSvg from '@airclass/icons-svg/lib/asn/PriceTagFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PriceTagFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PriceTagFillSvg}></AntdIcon>;
};

PriceTagFill.displayName = 'PriceTagFill';
PriceTagFill.inheritAttrs = false;
export default PriceTagFill;