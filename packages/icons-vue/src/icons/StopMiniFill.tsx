// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StopMiniFillSvg from '@airclass/icons-svg/lib/asn/StopMiniFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopMiniFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopMiniFillSvg}></AntdIcon>;
};

StopMiniFill.displayName = 'StopMiniFill';
StopMiniFill.inheritAttrs = false;
export default StopMiniFill;