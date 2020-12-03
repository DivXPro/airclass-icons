// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MentalHealthFillSvg from '@airclass/icons-svg/lib/asn/MentalHealthFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MentalHealthFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MentalHealthFillSvg}></AntdIcon>;
};

MentalHealthFill.displayName = 'MentalHealthFill';
MentalHealthFill.inheritAttrs = false;
export default MentalHealthFill;