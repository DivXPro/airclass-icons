// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CapsuleFillSvg from '@airclass/icons-svg/lib/asn/CapsuleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CapsuleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CapsuleFillSvg}></AntdIcon>;
};

CapsuleFill.displayName = 'CapsuleFill';
CapsuleFill.inheritAttrs = false;
export default CapsuleFill;