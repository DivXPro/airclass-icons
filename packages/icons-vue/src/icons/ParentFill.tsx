// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ParentFillSvg from '@airclass/icons-svg/lib/asn/ParentFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ParentFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ParentFillSvg}></AntdIcon>;
};

ParentFill.displayName = 'ParentFill';
ParentFill.inheritAttrs = false;
export default ParentFill;