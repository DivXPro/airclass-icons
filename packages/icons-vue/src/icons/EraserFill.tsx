// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EraserFillSvg from '@airclass/icons-svg/lib/asn/EraserFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EraserFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EraserFillSvg}></AntdIcon>;
};

EraserFill.displayName = 'EraserFill';
EraserFill.inheritAttrs = false;
export default EraserFill;