// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RidingLineSvg from '@airclass/icons-svg/lib/asn/RidingLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RidingLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RidingLineSvg}></AntdIcon>;
};

RidingLine.displayName = 'RidingLine';
RidingLine.inheritAttrs = false;
export default RidingLine;