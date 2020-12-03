// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PaintBrushLineSvg from '@airclass/icons-svg/lib/asn/PaintBrushLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaintBrushLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaintBrushLineSvg}></AntdIcon>;
};

PaintBrushLine.displayName = 'PaintBrushLine';
PaintBrushLine.inheritAttrs = false;
export default PaintBrushLine;