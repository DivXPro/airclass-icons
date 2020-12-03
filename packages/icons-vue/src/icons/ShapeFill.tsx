// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShapeFillSvg from '@airclass/icons-svg/lib/asn/ShapeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShapeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShapeFillSvg}></AntdIcon>;
};

ShapeFill.displayName = 'ShapeFill';
ShapeFill.inheritAttrs = false;
export default ShapeFill;