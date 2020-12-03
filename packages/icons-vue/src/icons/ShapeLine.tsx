// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShapeLineSvg from '@airclass/icons-svg/lib/asn/ShapeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShapeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShapeLineSvg}></AntdIcon>;
};

ShapeLine.displayName = 'ShapeLine';
ShapeLine.inheritAttrs = false;
export default ShapeLine;