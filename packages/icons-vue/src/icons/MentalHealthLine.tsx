// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MentalHealthLineSvg from '@airclass/icons-svg/lib/asn/MentalHealthLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MentalHealthLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MentalHealthLineSvg}></AntdIcon>;
};

MentalHealthLine.displayName = 'MentalHealthLine';
MentalHealthLine.inheritAttrs = false;
export default MentalHealthLine;