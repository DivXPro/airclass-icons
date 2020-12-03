// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RulerLineSvg from '@airclass/icons-svg/lib/asn/RulerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RulerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerLineSvg}></AntdIcon>;
};

RulerLine.displayName = 'RulerLine';
RulerLine.inheritAttrs = false;
export default RulerLine;