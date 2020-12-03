// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ServiceLineSvg from '@airclass/icons-svg/lib/asn/ServiceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ServiceLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ServiceLineSvg}></AntdIcon>;
};

ServiceLine.displayName = 'ServiceLine';
ServiceLine.inheritAttrs = false;
export default ServiceLine;