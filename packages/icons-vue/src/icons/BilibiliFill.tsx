// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BilibiliFillSvg from '@airclass/icons-svg/lib/asn/BilibiliFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BilibiliFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BilibiliFillSvg}></AntdIcon>;
};

BilibiliFill.displayName = 'BilibiliFill';
BilibiliFill.inheritAttrs = false;
export default BilibiliFill;