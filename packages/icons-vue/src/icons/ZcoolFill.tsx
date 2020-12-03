// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ZcoolFillSvg from '@airclass/icons-svg/lib/asn/ZcoolFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZcoolFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZcoolFillSvg}></AntdIcon>;
};

ZcoolFill.displayName = 'ZcoolFill';
ZcoolFill.inheritAttrs = false;
export default ZcoolFill;