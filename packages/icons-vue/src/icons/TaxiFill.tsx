// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TaxiFillSvg from '@airclass/icons-svg/lib/asn/TaxiFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaxiFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TaxiFillSvg}></AntdIcon>;
};

TaxiFill.displayName = 'TaxiFill';
TaxiFill.inheritAttrs = false;
export default TaxiFill;