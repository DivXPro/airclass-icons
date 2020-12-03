// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SubtractFillSvg from '@airclass/icons-svg/lib/asn/SubtractFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SubtractFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SubtractFillSvg}></AntdIcon>;
};

SubtractFill.displayName = 'SubtractFill';
SubtractFill.inheritAttrs = false;
export default SubtractFill;