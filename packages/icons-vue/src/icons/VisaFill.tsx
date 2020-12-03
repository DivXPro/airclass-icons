// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VisaFillSvg from '@airclass/icons-svg/lib/asn/VisaFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VisaFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VisaFillSvg}></AntdIcon>;
};

VisaFill.displayName = 'VisaFill';
VisaFill.inheritAttrs = false;
export default VisaFill;