// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TaxiWifiFillSvg from '@airclass/icons-svg/lib/asn/TaxiWifiFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaxiWifiFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaxiWifiFillSvg}></AntdIcon>;
};

TaxiWifiFill.displayName = 'TaxiWifiFill';
TaxiWifiFill.inheritAttrs = false;
export default TaxiWifiFill;