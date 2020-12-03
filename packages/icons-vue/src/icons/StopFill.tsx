// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StopFillSvg from '@airclass/icons-svg/lib/asn/StopFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopFillSvg}></AntdIcon>;
};

StopFill.displayName = 'StopFill';
StopFill.inheritAttrs = false;
export default StopFill;