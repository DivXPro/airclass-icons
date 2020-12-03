// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShirtFillSvg from '@airclass/icons-svg/lib/asn/ShirtFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShirtFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShirtFillSvg}></AntdIcon>;
};

ShirtFill.displayName = 'ShirtFill';
ShirtFill.inheritAttrs = false;
export default ShirtFill;