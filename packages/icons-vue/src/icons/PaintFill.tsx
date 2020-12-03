// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PaintFillSvg from '@airclass/icons-svg/lib/asn/PaintFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaintFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaintFillSvg}></AntdIcon>;
};

PaintFill.displayName = 'PaintFill';
PaintFill.inheritAttrs = false;
export default PaintFill;