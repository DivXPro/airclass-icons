// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import XboxFillSvg from '@airclass/icons-svg/lib/asn/XboxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const XboxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={XboxFillSvg}></AntdIcon>;
};

XboxFill.displayName = 'XboxFill';
XboxFill.inheritAttrs = false;
export default XboxFill;