// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BriefcaseLineSvg from '@airclass/icons-svg/lib/asn/BriefcaseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BriefcaseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BriefcaseLineSvg}></AntdIcon>;
};

BriefcaseLine.displayName = 'BriefcaseLine';
BriefcaseLine.inheritAttrs = false;
export default BriefcaseLine;