// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StethoscopeFillSvg from '@airclass/icons-svg/lib/asn/StethoscopeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StethoscopeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StethoscopeFillSvg}></AntdIcon>;
};

StethoscopeFill.displayName = 'StethoscopeFill';
StethoscopeFill.inheritAttrs = false;
export default StethoscopeFill;