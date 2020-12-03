// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PaintBrushFillSvg from '@airclass/icons-svg/lib/asn/PaintBrushFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaintBrushFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaintBrushFillSvg}></AntdIcon>;
};

PaintBrushFill.displayName = 'PaintBrushFill';
PaintBrushFill.inheritAttrs = false;
export default PaintBrushFill;