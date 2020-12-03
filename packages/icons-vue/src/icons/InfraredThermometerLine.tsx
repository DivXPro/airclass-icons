// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InfraredThermometerLineSvg from '@airclass/icons-svg/lib/asn/InfraredThermometerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfraredThermometerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfraredThermometerLineSvg}></AntdIcon>;
};

InfraredThermometerLine.displayName = 'InfraredThermometerLine';
InfraredThermometerLine.inheritAttrs = false;
export default InfraredThermometerLine;