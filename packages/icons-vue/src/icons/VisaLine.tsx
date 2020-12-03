// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VisaLineSvg from '@airclass/icons-svg/lib/asn/VisaLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VisaLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VisaLineSvg}></AntdIcon>;
};

VisaLine.displayName = 'VisaLine';
VisaLine.inheritAttrs = false;
export default VisaLine;