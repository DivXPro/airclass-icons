// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PencilRulerLineSvg from '@airclass/icons-svg/lib/asn/PencilRulerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PencilRulerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PencilRulerLineSvg}></AntdIcon>;
};

PencilRulerLine.displayName = 'PencilRulerLine';
PencilRulerLine.inheritAttrs = false;
export default PencilRulerLine;