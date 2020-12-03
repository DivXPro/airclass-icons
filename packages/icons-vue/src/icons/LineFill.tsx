// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LineFillSvg from '@airclass/icons-svg/lib/asn/LineFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LineFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LineFillSvg}></AntdIcon>;
};

LineFill.displayName = 'LineFill';
LineFill.inheritAttrs = false;
export default LineFill;