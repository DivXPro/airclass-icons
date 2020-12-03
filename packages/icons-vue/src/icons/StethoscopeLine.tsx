// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StethoscopeLineSvg from '@airclass/icons-svg/lib/asn/StethoscopeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StethoscopeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StethoscopeLineSvg}></AntdIcon>;
};

StethoscopeLine.displayName = 'StethoscopeLine';
StethoscopeLine.inheritAttrs = false;
export default StethoscopeLine;