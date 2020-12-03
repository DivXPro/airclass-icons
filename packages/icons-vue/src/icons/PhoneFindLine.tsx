// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PhoneFindLineSvg from '@airclass/icons-svg/lib/asn/PhoneFindLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneFindLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneFindLineSvg}></AntdIcon>;
};

PhoneFindLine.displayName = 'PhoneFindLine';
PhoneFindLine.inheritAttrs = false;
export default PhoneFindLine;