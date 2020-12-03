// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TaxiLineSvg from '@airclass/icons-svg/lib/asn/TaxiLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaxiLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaxiLineSvg}></AntdIcon>;
};

TaxiLine.displayName = 'TaxiLine';
TaxiLine.inheritAttrs = false;
export default TaxiLine;