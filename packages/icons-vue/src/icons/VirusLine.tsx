// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VirusLineSvg from '@airclass/icons-svg/lib/asn/VirusLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VirusLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VirusLineSvg}></AntdIcon>;
};

VirusLine.displayName = 'VirusLine';
VirusLine.inheritAttrs = false;
export default VirusLine;