// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SuitcaseLineSvg from '@airclass/icons-svg/lib/asn/SuitcaseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SuitcaseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SuitcaseLineSvg}></AntdIcon>;
};

SuitcaseLine.displayName = 'SuitcaseLine';
SuitcaseLine.inheritAttrs = false;
export default SuitcaseLine;