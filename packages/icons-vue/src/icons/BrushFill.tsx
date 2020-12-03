// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BrushFillSvg from '@airclass/icons-svg/lib/asn/BrushFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BrushFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrushFillSvg}></AntdIcon>;
};

BrushFill.displayName = 'BrushFill';
BrushFill.inheritAttrs = false;
export default BrushFill;