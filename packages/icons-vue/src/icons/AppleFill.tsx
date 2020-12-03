// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AppleFillSvg from '@airclass/icons-svg/lib/asn/AppleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppleFillSvg}></AntdIcon>;
};

AppleFill.displayName = 'AppleFill';
AppleFill.inheritAttrs = false;
export default AppleFill;