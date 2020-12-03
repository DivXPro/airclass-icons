// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ZoomOutFillSvg from '@airclass/icons-svg/lib/asn/ZoomOutFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoomOutFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZoomOutFillSvg}></AntdIcon>;
};

ZoomOutFill.displayName = 'ZoomOutFill';
ZoomOutFill.inheritAttrs = false;
export default ZoomOutFill;