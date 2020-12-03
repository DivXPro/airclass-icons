// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpectrumLineSvg from '@airclass/icons-svg/lib/asn/SpectrumLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpectrumLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpectrumLineSvg}></AntdIcon>;
};

SpectrumLine.displayName = 'SpectrumLine';
SpectrumLine.inheritAttrs = false;
export default SpectrumLine;