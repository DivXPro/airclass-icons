// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FridgeFillSvg from '@airclass/icons-svg/lib/asn/FridgeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FridgeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FridgeFillSvg}></AntdIcon>;
};

FridgeFill.displayName = 'FridgeFill';
FridgeFill.inheritAttrs = false;
export default FridgeFill;