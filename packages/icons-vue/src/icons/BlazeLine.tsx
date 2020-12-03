// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BlazeLineSvg from '@airclass/icons-svg/lib/asn/BlazeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BlazeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlazeLineSvg}></AntdIcon>;
};

BlazeLine.displayName = 'BlazeLine';
BlazeLine.inheritAttrs = false;
export default BlazeLine;