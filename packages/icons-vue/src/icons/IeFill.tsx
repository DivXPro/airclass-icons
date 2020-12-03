// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IeFillSvg from '@airclass/icons-svg/lib/asn/IeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IeFillSvg}></AntdIcon>;
};

IeFill.displayName = 'IeFill';
IeFill.inheritAttrs = false;
export default IeFill;