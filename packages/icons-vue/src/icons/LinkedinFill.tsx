// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LinkedinFillSvg from '@airclass/icons-svg/lib/asn/LinkedinFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkedinFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkedinFillSvg}></AntdIcon>;
};

LinkedinFill.displayName = 'LinkedinFill';
LinkedinFill.inheritAttrs = false;
export default LinkedinFill;