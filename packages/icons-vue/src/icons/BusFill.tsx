// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BusFillSvg from '@airclass/icons-svg/lib/asn/BusFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BusFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BusFillSvg}></AntdIcon>;
};

BusFill.displayName = 'BusFill';
BusFill.inheritAttrs = false;
export default BusFill;