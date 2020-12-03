// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CupFillSvg from '@airclass/icons-svg/lib/asn/CupFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CupFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CupFillSvg}></AntdIcon>;
};

CupFill.displayName = 'CupFill';
CupFill.inheritAttrs = false;
export default CupFill;