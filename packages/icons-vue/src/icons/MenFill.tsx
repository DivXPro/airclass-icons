// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MenFillSvg from '@airclass/icons-svg/lib/asn/MenFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenFillSvg}></AntdIcon>;
};

MenFill.displayName = 'MenFill';
MenFill.inheritAttrs = false;
export default MenFill;