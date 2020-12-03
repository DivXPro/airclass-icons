// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DrizzleFillSvg from '@airclass/icons-svg/lib/asn/DrizzleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DrizzleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DrizzleFillSvg}></AntdIcon>;
};

DrizzleFill.displayName = 'DrizzleFill';
DrizzleFill.inheritAttrs = false;
export default DrizzleFill;