// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BlurOffFillSvg from '@airclass/icons-svg/lib/asn/BlurOffFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BlurOffFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlurOffFillSvg}></AntdIcon>;
};

BlurOffFill.displayName = 'BlurOffFill';
BlurOffFill.inheritAttrs = false;
export default BlurOffFill;