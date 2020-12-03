// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EyeFillSvg from '@airclass/icons-svg/lib/asn/EyeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeFillSvg}></AntdIcon>;
};

EyeFill.displayName = 'EyeFill';
EyeFill.inheritAttrs = false;
export default EyeFill;