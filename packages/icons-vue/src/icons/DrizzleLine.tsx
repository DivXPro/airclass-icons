// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DrizzleLineSvg from '@airclass/icons-svg/lib/asn/DrizzleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DrizzleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DrizzleLineSvg}></AntdIcon>;
};

DrizzleLine.displayName = 'DrizzleLine';
DrizzleLine.inheritAttrs = false;
export default DrizzleLine;