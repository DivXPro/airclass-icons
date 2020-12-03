// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SnowyFillSvg from '@airclass/icons-svg/lib/asn/SnowyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnowyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SnowyFillSvg}></AntdIcon>;
};

SnowyFill.displayName = 'SnowyFill';
SnowyFill.inheritAttrs = false;
export default SnowyFill;