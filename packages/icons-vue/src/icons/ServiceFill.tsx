// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ServiceFillSvg from '@airclass/icons-svg/lib/asn/ServiceFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ServiceFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ServiceFillSvg}></AntdIcon>;
};

ServiceFill.displayName = 'ServiceFill';
ServiceFill.inheritAttrs = false;
export default ServiceFill;