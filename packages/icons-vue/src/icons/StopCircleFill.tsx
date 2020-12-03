// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StopCircleFillSvg from '@airclass/icons-svg/lib/asn/StopCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopCircleFillSvg}></AntdIcon>;
};

StopCircleFill.displayName = 'StopCircleFill';
StopCircleFill.inheritAttrs = false;
export default StopCircleFill;