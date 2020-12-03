// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MediumFillSvg from '@airclass/icons-svg/lib/asn/MediumFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MediumFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MediumFillSvg}></AntdIcon>;
};

MediumFill.displayName = 'MediumFill';
MediumFill.inheritAttrs = false;
export default MediumFill;