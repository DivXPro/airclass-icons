// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MickeyFillSvg from '@airclass/icons-svg/lib/asn/MickeyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MickeyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MickeyFillSvg}></AntdIcon>;
};

MickeyFill.displayName = 'MickeyFill';
MickeyFill.inheritAttrs = false;
export default MickeyFill;