// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoreFillSvg from '@airclass/icons-svg/lib/asn/MoreFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoreFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreFillSvg}></AntdIcon>;
};

MoreFill.displayName = 'MoreFill';
MoreFill.inheritAttrs = false;
export default MoreFill;