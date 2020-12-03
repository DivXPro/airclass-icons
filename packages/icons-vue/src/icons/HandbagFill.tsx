// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HandbagFillSvg from '@airclass/icons-svg/lib/asn/HandbagFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HandbagFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HandbagFillSvg}></AntdIcon>;
};

HandbagFill.displayName = 'HandbagFill';
HandbagFill.inheritAttrs = false;
export default HandbagFill;