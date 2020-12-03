// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MeteorFillSvg from '@airclass/icons-svg/lib/asn/MeteorFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MeteorFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MeteorFillSvg}></AntdIcon>;
};

MeteorFill.displayName = 'MeteorFill';
MeteorFill.inheritAttrs = false;
export default MeteorFill;