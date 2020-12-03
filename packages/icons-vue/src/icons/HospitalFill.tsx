// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HospitalFillSvg from '@airclass/icons-svg/lib/asn/HospitalFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HospitalFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HospitalFillSvg}></AntdIcon>;
};

HospitalFill.displayName = 'HospitalFill';
HospitalFill.inheritAttrs = false;
export default HospitalFill;