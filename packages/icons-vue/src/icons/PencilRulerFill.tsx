// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PencilRulerFillSvg from '@airclass/icons-svg/lib/asn/PencilRulerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PencilRulerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PencilRulerFillSvg}></AntdIcon>;
};

PencilRulerFill.displayName = 'PencilRulerFill';
PencilRulerFill.inheritAttrs = false;
export default PencilRulerFill;