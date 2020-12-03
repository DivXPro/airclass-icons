// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DivideLineSvg from '@airclass/icons-svg/lib/asn/DivideLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DivideLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DivideLineSvg}></AntdIcon>;
};

DivideLine.displayName = 'DivideLine';
DivideLine.inheritAttrs = false;
export default DivideLine;