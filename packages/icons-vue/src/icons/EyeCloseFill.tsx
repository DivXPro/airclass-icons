// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EyeCloseFillSvg from '@airclass/icons-svg/lib/asn/EyeCloseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeCloseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeCloseFillSvg}></AntdIcon>;
};

EyeCloseFill.displayName = 'EyeCloseFill';
EyeCloseFill.inheritAttrs = false;
export default EyeCloseFill;