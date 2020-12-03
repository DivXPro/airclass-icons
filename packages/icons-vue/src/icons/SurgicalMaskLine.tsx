// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SurgicalMaskLineSvg from '@airclass/icons-svg/lib/asn/SurgicalMaskLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SurgicalMaskLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SurgicalMaskLineSvg}></AntdIcon>;
};

SurgicalMaskLine.displayName = 'SurgicalMaskLine';
SurgicalMaskLine.inheritAttrs = false;
export default SurgicalMaskLine;