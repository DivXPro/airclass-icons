// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CastFillSvg from '@airclass/icons-svg/lib/asn/CastFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CastFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CastFillSvg}></AntdIcon>;
};

CastFill.displayName = 'CastFill';
CastFill.inheritAttrs = false;
export default CastFill;