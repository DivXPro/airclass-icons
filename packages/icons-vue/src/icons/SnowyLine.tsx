// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SnowyLineSvg from '@airclass/icons-svg/lib/asn/SnowyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnowyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SnowyLineSvg}></AntdIcon>;
};

SnowyLine.displayName = 'SnowyLine';
SnowyLine.inheritAttrs = false;
export default SnowyLine;