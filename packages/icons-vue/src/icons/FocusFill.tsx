// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FocusFillSvg from '@airclass/icons-svg/lib/asn/FocusFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FocusFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FocusFillSvg}></AntdIcon>;
};

FocusFill.displayName = 'FocusFill';
FocusFill.inheritAttrs = false;
export default FocusFill;