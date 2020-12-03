// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Heart3LineSvg from '@airclass/icons-svg/lib/asn/Heart3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Heart3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Heart3LineSvg}></AntdIcon>;
};

Heart3Line.displayName = 'Heart3Line';
Heart3Line.inheritAttrs = false;
export default Heart3Line;