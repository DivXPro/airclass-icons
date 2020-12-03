// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MagicFillSvg from '@airclass/icons-svg/lib/asn/MagicFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MagicFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicFillSvg}></AntdIcon>;
};

MagicFill.displayName = 'MagicFill';
MagicFill.inheritAttrs = false;
export default MagicFill;