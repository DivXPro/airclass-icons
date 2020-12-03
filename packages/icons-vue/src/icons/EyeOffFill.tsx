// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EyeOffFillSvg from '@airclass/icons-svg/lib/asn/EyeOffFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeOffFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeOffFillSvg}></AntdIcon>;
};

EyeOffFill.displayName = 'EyeOffFill';
EyeOffFill.inheritAttrs = false;
export default EyeOffFill;