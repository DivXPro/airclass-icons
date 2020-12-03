// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoneyCnyCircleLineSvg from '@airclass/icons-svg/lib/asn/MoneyCnyCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoneyCnyCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyCnyCircleLineSvg}></AntdIcon>;
};

MoneyCnyCircleLine.displayName = 'MoneyCnyCircleLine';
MoneyCnyCircleLine.inheritAttrs = false;
export default MoneyCnyCircleLine;