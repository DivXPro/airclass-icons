// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BilliardsFillSvg from '@airclass/icons-svg/lib/asn/BilliardsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BilliardsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BilliardsFillSvg}></AntdIcon>;
};

BilliardsFill.displayName = 'BilliardsFill';
BilliardsFill.inheritAttrs = false;
export default BilliardsFill;