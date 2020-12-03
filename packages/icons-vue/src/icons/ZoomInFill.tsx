// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ZoomInFillSvg from '@airclass/icons-svg/lib/asn/ZoomInFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoomInFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZoomInFillSvg}></AntdIcon>;
};

ZoomInFill.displayName = 'ZoomInFill';
ZoomInFill.inheritAttrs = false;
export default ZoomInFill;