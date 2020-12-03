// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SubtractLineSvg from '@airclass/icons-svg/lib/asn/SubtractLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SubtractLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SubtractLineSvg}></AntdIcon>;
};

SubtractLine.displayName = 'SubtractLine';
SubtractLine.inheritAttrs = false;
export default SubtractLine;