// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckFillSvg from '@airclass/icons-svg/lib/asn/CheckFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckFillSvg}></AntdIcon>;
};

CheckFill.displayName = 'CheckFill';
CheckFill.inheritAttrs = false;
export default CheckFill;