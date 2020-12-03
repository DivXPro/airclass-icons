// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExchangeFillSvg from '@airclass/icons-svg/lib/asn/ExchangeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExchangeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExchangeFillSvg}></AntdIcon>;
};

ExchangeFill.displayName = 'ExchangeFill';
ExchangeFill.inheritAttrs = false;
export default ExchangeFill;