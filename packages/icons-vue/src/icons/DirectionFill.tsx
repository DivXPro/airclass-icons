// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DirectionFillSvg from '@airclass/icons-svg/lib/asn/DirectionFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DirectionFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectionFillSvg}></AntdIcon>;
};

DirectionFill.displayName = 'DirectionFill';
DirectionFill.inheritAttrs = false;
export default DirectionFill;