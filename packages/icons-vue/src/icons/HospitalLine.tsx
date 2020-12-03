// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HospitalLineSvg from '@airclass/icons-svg/lib/asn/HospitalLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HospitalLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HospitalLineSvg}></AntdIcon>;
};

HospitalLine.displayName = 'HospitalLine';
HospitalLine.inheritAttrs = false;
export default HospitalLine;