// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PenNibFillSvg from '@airclass/icons-svg/lib/asn/PenNibFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PenNibFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenNibFillSvg}></AntdIcon>;
};

PenNibFill.displayName = 'PenNibFill';
PenNibFill.inheritAttrs = false;
export default PenNibFill;