// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BasketballFillSvg from '@airclass/icons-svg/lib/asn/BasketballFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BasketballFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BasketballFillSvg}></AntdIcon>;
};

BasketballFill.displayName = 'BasketballFill';
BasketballFill.inheritAttrs = false;
export default BasketballFill;