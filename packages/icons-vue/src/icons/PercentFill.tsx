// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PercentFillSvg from '@airclass/icons-svg/lib/asn/PercentFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PercentFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentFillSvg}></AntdIcon>;
};

PercentFill.displayName = 'PercentFill';
PercentFill.inheritAttrs = false;
export default PercentFill;