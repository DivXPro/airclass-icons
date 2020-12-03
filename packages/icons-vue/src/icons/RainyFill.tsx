// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RainyFillSvg from '@airclass/icons-svg/lib/asn/RainyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RainyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RainyFillSvg}></AntdIcon>;
};

RainyFill.displayName = 'RainyFill';
RainyFill.inheritAttrs = false;
export default RainyFill;