// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PoliceCarFillSvg from '@airclass/icons-svg/lib/asn/PoliceCarFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PoliceCarFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PoliceCarFillSvg}></AntdIcon>;
};

PoliceCarFill.displayName = 'PoliceCarFill';
PoliceCarFill.inheritAttrs = false;
export default PoliceCarFill;