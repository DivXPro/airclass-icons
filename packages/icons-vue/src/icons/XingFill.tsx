// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import XingFillSvg from '@airclass/icons-svg/lib/asn/XingFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const XingFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={XingFillSvg}></AntdIcon>;
};

XingFill.displayName = 'XingFill';
XingFill.inheritAttrs = false;
export default XingFill;