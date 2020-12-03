// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BriefcaseFillSvg from '@airclass/icons-svg/lib/asn/BriefcaseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BriefcaseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BriefcaseFillSvg}></AntdIcon>;
};

BriefcaseFill.displayName = 'BriefcaseFill';
BriefcaseFill.inheritAttrs = false;
export default BriefcaseFill;