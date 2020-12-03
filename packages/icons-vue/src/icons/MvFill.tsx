// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MvFillSvg from '@airclass/icons-svg/lib/asn/MvFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MvFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MvFillSvg}></AntdIcon>;
};

MvFill.displayName = 'MvFill';
MvFill.inheritAttrs = false;
export default MvFill;