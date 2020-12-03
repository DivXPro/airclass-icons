// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AppleLineSvg from '@airclass/icons-svg/lib/asn/AppleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppleLineSvg}></AntdIcon>;
};

AppleLine.displayName = 'AppleLine';
AppleLine.inheritAttrs = false;
export default AppleLine;